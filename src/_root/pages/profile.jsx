import { useUsrContext } from "@/contexts/AuthContext";
import { Pencil, User, Home } from "lucide-react";
import { Link } from "react-router-dom";
import Reviews from "./reviews";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Profile() {
  const { usr } = useUsrContext();

  // faking data cuz of time constraint.
  const data = {
    ratings: [
      {
        usrname: usr.name || "username",
        reviewText:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, velit.",
        time: "7 sep, 2023",
      },
      {
        usrname: usr.name || "username",
        reviewText:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, velit.",
        time: "7 sep, 2023",
      },
      {
        usrname: usr.name || "username",
        reviewText:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, velit.",
        time: "7 sep, 2023",
      },
    ],
  };

  return (
    <div className="w-full h-full max-w-2xl m-auto">
      <div className="flex flex-col gap-2 mx-2">
        <div className="flex justify-between my-4">
          <p className="font-bold text-[30px] mx-2  underline">User Profile</p>
          <Link to="/">
            <Home
              color="#cad2c5"
              size={28}
              className="self-center mt-3  text-center"
            />
          </Link>
        </div>
        <div className="flex gap-2 mt-4 mx-2 bg-primary opacity-60   rounded-xl p-4 align-middle justify-between">
          {/* 
          SECTION: 
          USER'S SECTION.
          */}
          <div className="flex gap-2">
            {usr.Avatar ? (
              <img
                src={usr.Avatar}
                alt="usr avatar"
                className="self-center w-28 h-28 lg:h-10 lg:w-36 rounded-lg object-cover"
              />
            ) : (
              <User
                color="#cad2c5"
                size={45}
                className="self-center mt-0.5 mr-2"
              />
            )}

            <div className="flex flex-col">
              <p className=" text-[20px] font-bold">
                {usr.usrname || "username"}
              </p>
              <hr className="w-42 my-2 border-[#cad2c5]" />
              <p className="text-[14px] text-[#cad2c5] opacity-60">
                {usr.phno || "+91 XXXXX XXXXX"}
              </p>
              <p className="text-[14px] text-[#cad2c5] opacity-60">
                {usr.email || "email@emailcom"}
              </p>
            </div>
          </div>

          <Link to="/editprofile" className=" border-secondary rounded ">
            <HoverCard>
              <HoverCardTrigger>
                {" "}
                <Pencil color="#cad2c5" size={18} />
              </HoverCardTrigger>
              <HoverCardContent className="w-20 p-2 bg-input text-[12px] text-[#cad2c5] border-none mr-5">
                Edit profile
              </HoverCardContent>
            </HoverCard>
          </Link>
        </div>

        <div className="bg-primary opacity-60 rounded-xl p-4 align-middle my-2 justify-between mx-2">
          {/* 
            SECTION: 
            RATINGS GIVEN.
            */}

          <p className="text-2xl font-semibold underline text-center mb-6">
            Your ratings
          </p>
          <Reviews ratings={data} />
        </div>
        <Button className="form-button mt-1  mb-4 w-[95%]  hover:bg-input hover:text-white">
          <Link to="/writereview">Write a review</Link>
        </Button>
      </div>
    </div>
  );
}
