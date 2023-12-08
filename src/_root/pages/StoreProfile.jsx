import Reviews from "./reviews";

export default function StoreProfile() {
    // faking data cuz of time constraint.
    const data = {
        ratings: [{
            usrname: "username",
            reviewText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, velit.",
            time: "7 sep, 2023"
        },
        {
            usrname: "username",
            reviewText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, velit.",
            time: "7 sep, 2023"
        },
        {
            usrname: "username",
            reviewText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, velit.",
            time: "7 sep, 2023"
        },]
    }


    return (
        <div className="w-full sm:mx-auto">
            {/* 
             TODO: 
             store name + home.
            */}
            <p className="font-bold text-[40px] ml-4  underline">
                Store name
            </p>

            {/* 
             TODO: 
             add a carousel in here.
            */}
            <img src="https://shorturl.at/rvOQX" alt="shops's image" className="rounded-lg mt-2 mx-4 w-[92%] sm:w-[50%] object-cover" />

            {/* 
             TODO: 
             add product description
            */}

            <p className="bg-primary opacity-60 rounded-xl p-2 m-4 sm:w-[60%] sm:mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eaque consequatur sunt et soluta molestias unde labore deleniti exercitationem magni!
            </p>

            {/* 
             TODO: 
             add contacts
            */}
            <p className="ml-4 text-lg font-semibold">
                <a href="tel:+918600985942">
                    contact us now
                </a>
            </p>
            
            {/* 
             TODO: 
             add buisness hours and address.
            */}
            <div className="flex justify-between p-2 m-2 sm:mx-auto">
                <p className="bg-[#ffcdb2] bg-opacity-20 border-[1px] border-[#ffcdb2] px-4 py-1 rounded-full text-[#ffcdb2]">
                    address
                </p>
                <p className="bg-[#E5989B] bg-opacity-20 border-[1px] border-[#E5989B] px-4 py-1 rounded-full text-[#E5989B]">
                    9:00 AM - 12:00PM
                </p>
            </div>

            {/* 
             TODO: 
             add reviews
            */}
            <Reviews ratings={data} />
        </div>
    )
}