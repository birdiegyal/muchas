import { RatingsCard } from "@/components/shared/RatingsCard";
import React from "react";

const Reviews = ({ ratings }) => {
  return (
    <div className="w-full  mx-auto">
      {ratings.ratings.map((review, i) => { return <RatingsCard id={i} review = { review } />})}
    </div>
  )
}

export default Reviews;
