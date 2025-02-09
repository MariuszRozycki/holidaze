import React from "react";
import "./StarRating.scss";

type StarRatingProps = {
  rating: number;
};

const StarRating = ({ rating }: StarRatingProps) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => {
      const starIndex = i + 1;
      if (starIndex <= rating) {
        return <i className='bi bi-star-fill full-star' key={starIndex}></i>;
      } else if (starIndex - rating < 1) {
        return <i className='bi bi-star-half half-star' key={starIndex}></i>;
      } else {
        return <i className='bi bi-star empty-star' key={starIndex}></i>;
      }
    });
  };

  return <div className='star-rating'>{renderStars()}</div>;
};

export default StarRating;
