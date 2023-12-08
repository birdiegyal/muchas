import {
    ID,
    Query
} from 'appwrite'

import {
    account,
    appwriteConfig,
    avatars,
    databases,
    storage
} from './config'


export async function createUsrAc(usr) {
    try {

        // creating an user a/c in auth section.
        const fromUsrAc = await account.create(
            ID.unique(),
            usr.Email,
            usr.Passcode,
            usr.Usrname
        )

        // in this way we ensure that user didnt get away without creating his a/c on the platform.
        if (!fromUsrAc) throw Error

        // getting avatars using user's name initials because its a required attr for any user doc within the users coll.
        const avatarUrl = avatars.getInitials(usr.Usrname)

        // adding the user in usersColl
        const newUser = await saveUsrToDb({
            accountId: fromUsrAc.$id,
            email: fromUsrAc.email,
            Avatar: avatarUrl,
            usrname: usr.Usrname
        })

        return newUser
    } catch (error) {
        console.log(error)
        return error
    }
}

export async function saveUsrToDb(usr) {

    try {
        // creating a doc in usersColl
        const usrDoc = await databases.createDocument(
            appwriteConfig.muchasDbId,
            appwriteConfig.usrsCollId,
            ID.unique(),
            usr
        )
        return usrDoc
    } catch (error) {
        console.log(error)
        return error
    }
}

export async function signInAc(usr) {
    try {
        const userSession = await account.createEmailSession(usr.email, usr.passcode)
        return userSession
    } catch (error) {
        console.log(error)
        return error
    }
}

export async function signOutAc() {
    try {
        const signedOutSession = await account.deleteSession("current")
        return signedOutSession
    } catch (error) {
        console.log(error)
        return error
    }
}

export async function getCurrentUsr() {
    try {
        const currentAc = await getAccount();
        if (!currentAc) throw Error;

        const currentUsr = await databases.listDocuments(
            appwriteConfig.muchasDbId,
            appwriteConfig.usrsCollId,
            [Query.equal("accountId", currentAc.$id)]
        );

        if (!currentUsr) throw Error;

        return currentUsr.documents[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getAccount() {
    try {
        const currentAc = await account.get();

        return currentAc;
    } catch (error) {
        
        console.log(error);
    }
}

export async function getUserById(usrId) {
    try {
        const usr = await databases.getDocument(
            appwriteConfig.muchasDbId,
            appwriteConfig.usrsCollId,
            usrId
        );

        if (!usr) throw Error;

        return usr;
    } catch (error) {
        console.log(error);
    }
}

/*
 TODO: 
 got to checkout whether or not these attrs re available.
*/
export async function updateUser(usr) {
    const hasFileToUpdate = usr.file.length > 0;
    try {

        let image = {
            imageUrl: usr.imgUrl,
            imageId: usr.imageId,
        };

        if (hasFileToUpdate) {
            // Upload new file to appwrite storage
            const uploadedFile = await uploadFile(usr.file[0]);
            if (!uploadedFile) throw Error;

            // Get new file url
            
            const fileUrl = getFilePreview(uploadedFile.$id);
            if (!fileUrl) {
            
                await deleteFile(uploadedFile.$id);
                throw Error;
            }
            
            image = { ...image, imageUrl: fileUrl, imageId: uploadedFile.$id };
        }

        //  Update user
        const updatedUser = await databases.updateDocument(
            appwriteConfig.muchasDbId,
            appwriteConfig.usrsCollId,
            usr.userId,
            {
                name: usr.name,
                bio: usr.bio,
                imageUrl: image.imageUrl,
                imageId: image.imageId,
            }
        );

        // Failed to update
        if (!updatedUser) {
            // Delete new file that has been recently uploaded
            if (hasFileToUpdate) {
                await deleteFile(image.imageId);
            }
            // If no new file uploaded, just throw error
            throw Error;
        }

        // Safely delete old file after successful update
        if (usr.imageId && hasFileToUpdate) {
            await deleteFile(usr.imageId);
        }

        return updatedUser;
    } catch (error) {
        console.log(error);
    }
}

export async function getUsrPosts(usrId) {
    if (!usrId) return;

    try {
        const post = await databases.listDocuments(
            appwriteConfig.muchasDbId,
            appwriteConfig.offersCollId,
            [Query.equal("creator", usrId), Query.orderDesc("$createdAt")]
        );

        if (!post) throw Error;

        return post;
    } catch (error) {
        console.log(error);
    }
}

export async function getPostById(postId) {
    if (!postId) throw Error;

    try {
        const post = await databases.getDocument(
            appwriteConfig.muchasDbId,
            appwriteConfig.offersCollId,
            postId
        );

        if (!post) throw Error;

        return post;
    } catch (error) {
        console.log(error);
    }
}

export async function ratePost(postId, ratingsArray) {
    try {
        const updatedPost = await databases.updateDocument(
            appwriteConfig.muchasDbId,
            appwriteConfig.offersCollId,
            postId,
            {
                ratings: ratingsArray,
            }
        );

        if (!updatedPost) throw Error;

        return updatedPost;
    } catch (error) {
        console.log(error);
    }
}

export async function uploadFile(file) {
    try {
        const uploadedFile = await storage.createFile(
            appwriteConfig.muchasBucketId,
            ID.unique(),
            file
        )

        return uploadedFile
    } catch (error) {
        console.log(error)
        return error
    }
}

export async function createOffer(offer) {
    try {
        // Upload file to appwrite storage
        const uploadedFile = await uploadFile(offer.file[0])

        if (!uploadedFile) throw Error

        // Get file url
        const offerBannerUrl = [getFilePreview(uploadedFile.$id)]
        if (!offerBannerUrl) {
            
            await deleteFile(uploadedFile.$id)
            throw Error
        }

        // Create offer
        const newOffer = await databases.createDocument(
            appwriteConfig.muchasDbId,
            appwriteConfig.offersCollId,
            ID.unique(),
            {
                offerCreator: offer.userId,
                offerDesc: offer.offerDesc,
                offerBanner: offerBannerUrl,
                offerBannerId: uploadedFile.$id,
                geocode: offer.geocode,
            }
        )

        if (!newOffer) {
            await deleteFile(uploadedFile.$id)
            throw Error
        }

        return newOffer
    } catch (error) {
        console.log(error)
        return error
    }
}

export function getFilePreview(fileId, width, height) {
    try {
        const fileUrl = storage.getFilePreview(
            appwriteConfig.muchasBucketId,
            fileId,
            width,
            height,
            "top",
            100
        )

        if (!fileUrl) throw Error

        return fileUrl
    } catch (error) {
        console.log(error)
        return error
    }
}

export async function deleteFile(fileId) {
    try {
        await storage.deleteFile(appwriteConfig.muchasBucketId, fileId)

        return { status: "ok" }
    } catch (error) {
        console.log(error)
        return error
    }
}

export async function updateOffer(offer) {
    const hasFileToUpdate = offer.file.length > 0;

    try {
        let Banner = {
            bannerUrl: offer.bannerUrl,
            bannerId: offer.bannerId,
        };

        if (hasFileToUpdate) {
            // Upload new file to appwrite storage
            const uploadedFile = await uploadFile(offer.file[0]);
            if (!uploadedFile) throw Error;

            // Get new file url
            
            const fileUrl = getFilePreview(uploadedFile.$id);
            if (!fileUrl) {
            
                await deleteFile(uploadedFile.$id);
                throw Error;
            }
            
            Banner = { ...Banner, bannerUrl: fileUrl, bannerId: uploadedFile.$id };
        }

        //  Update post
        const updatedPost = await databases.updateDocument(
            appwriteConfig.muchasDbId,
            appwriteConfig.offersCollId,
            offer.postId,
            {
                offerDesc: offer.offerDesc,
                offerBanner: Banner.bannerUrl,
                offerBannerId: Banner.bannerId,
                location: offer.location,
                tags: tags,
            }
        );

        // Failed to update
        if (!updatedPost) {
            // Delete new file that has been recently uploaded
            if (hasFileToUpdate) {
                await deleteFile(Banner.imageId);
            }

            // If no new file uploaded, just throw error
            throw Error;
        }

        // Safely delete old file after successful update
        if (hasFileToUpdate) {
            await deleteFile(offer.imageId);
        }

        return updatedPost;
    } catch (error) {
        console.log(error);
    }
}




