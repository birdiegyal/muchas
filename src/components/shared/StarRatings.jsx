import React from "react";
import ReactStars from "react-rating-stars-component";

const StarRatings = ({ rating, onRatingChange }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
    onRatingChange(newRating);
  };

  return (
    <ReactStars
      count={5}
      value={rating}
      onChange={ratingChanged}
      size={24}
      activeColor="#ffd700"
    />
  );
};

export default StarRatings;
