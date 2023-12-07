/* 
 NOTE: 
 this is that web sdk for appwrite.
*/
import {
    Client,
    Account,
    Databases,
    Storage,
    Avatars,
} from "appwrite";

/* 
 NOTE: 
 we're gonna use this obj to pass em values wherever required.
*/
export const appwriteConfig = {
    projectId: import.meta.env.VITE_PROJECT_ID,
    endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
    muchasBucketId: import.meta.env.VITE_MUCHAS_BUCKET_ID,
    muchasDbId: import.meta.env.VITE_MUCHAS_DB_ID,
    usrsCollId: import.meta.env.VITE_USRCOLL_ID,
    offersCollId: import.meta.env.VITE_OFFERSCOLL_ID,
    merchPtsCollId: import.meta.env.VITE_MERCHPTSCOLL_ID,
}

/* 
 NOTE: 
 so that we dont gotta instantiate every time we use em.simply, create one entry point for doing so.
*/

export const client = new Client()
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)

export const account = new Account(client)
export const databases = new Databases(client)
export const storage = new Storage(client)
export const avatars = new Avatars(client)