import React from "react";

const Review = (props) => {
  const { rating, description } = props;

  return (
    <div className = "review">
      <div className = "reviewRating">Rating: {rating}</div>
      <div className = "reviewDescription">{description}</div>
    </div>
  )
}

export default Review;
