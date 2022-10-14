import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

export const Stars = () => {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <Rating
      tooltipArray={["1 stars", "2 stars", "3 stars", "4 stars", "5 stars"]}
      transition
      showTooltip
      onClick={handleRating}
      ratingValue={rating} /* Available Props */
    />
  );
};

export default Stars;
