import React from "react";

const Review = (props) => {
  const { rating, description } = props;

  return (
    <div>
      <h1>Rating: {rating}</h1>
      <p>Review description: {description}</p>
    </div>
  )
}

export default Review;
