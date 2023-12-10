import { RatingsCard } from "@/components/shared/RatingsCard";
import React from "react";

const Reviews = ({ ratings }) => {
  return (
    <div className="w-full  mx-auto">
      {ratings.ratings.map((review, i) => {
        return (
          <>
            {i > 0 && <hr className="w-[90%] mx-auto border-[#cad2c5]" />}
            <RatingsCard id={i} review={review} />
          </>
        );
      })}
    </div>
  );
};

export default Reviews;
