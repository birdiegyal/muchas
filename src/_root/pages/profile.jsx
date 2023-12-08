import { useUsrContext } from "@/contexts/AuthContext";
import { Pencil, User, Home } from "lucide-react";
import { Link } from "react-router-dom";
import Reviews from "./reviews";
import { Button } from "@/components/ui/button";

export default function Profile() {
  const { usr } = useUsrContext()

  // faking data cuz of time constraint.
  const data = {
    ratings: [{
      usrname: usr.name || "username",
      reviewText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, velit.",
      time: "7 sep, 2023"
    },
    {
      usrname: usr.name || "username",
      reviewText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, velit.",
      time: "7 sep, 2023"
    },
    {
      usrname: usr.name || "username",
      reviewText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, velit.",
      time: "7 sep, 2023"
    },]
  }



  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-2 mt-2 mx-2">

        <div className="flex justify-between">

          <p className="font-bold text-[40px] mx-2 underline">User Profile</p>
          <Link to="/">
            <Home color="#cad2c5" size={48} className="self-center mt-1" />
          </Link>
        </div>
        <div className="flex gap-2 mt-4 mx-2 bg-primary opacity-60 rounded-2xl p-4 align-middle justify-between">
          {/* 
          SECTION: 
          USER'S SECTION.
          */}
          <div className="flex gap-2">


            {
              usr.Avatar ?
                <img src={usr.Avatar} alt="usr avatar" className="self-center w-28 h-28 lg:h-36 lg:w-36 rounded-lg object-cover" />
                :

                <User color="#cad2c5" size={64} className="self-center" />

            }

            <div className="flex flex-col">
              <p className="font-thin text-[24px]">{usr.usrname || "username"}</p>
              <p>contact details</p>
              <p className="text-[18px] text-[#cad2c5] opacity-60">{usr.email}</p>
            </div>
          </div>

          <Link to="/editprofile" className=" border-secondary rounded ">
            <Pencil color="#cad2c5" size={30} />
          </Link>
        </div>

        <div className="bg-primary opacity-60 rounded-2xl p-4 align-middle my-2 justify-between mx-2" >
          {/* 
            SECTION: 
            RATINGS GIVEN.
            */}

          <p className="text-2xl font-semibold" >your ratings</p>
          <Reviews ratings={data} />

          <Button className="form-button mt-5 w-full  hover:bg-input hover:text-white">
            <Link to="/writereview">Write a review</Link>
          </Button>

        </div>
      </div>
    </div>
  );
}
