import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const StarRating = ({ rating, maxStars = 5 }) => {
  const renderStar = (index) => {
    const fullStarIndex = Math.floor(rating);
    const isHalfStar = rating % 1 !== 0 && index === fullStarIndex;
    const isFullStar =
      index < fullStarIndex || (isHalfStar && rating % 1 >= 0.5);

    if (isFullStar) {
      return <AiFillStar key={index} style={{ color: "gold" }} />;
    } else if (isHalfStar) {
      return (
        <div
          key={index}
          style={{
            position: "relative",
            display: "inline-block",
            width: "20px",
            height: "20px",
            overflow: "hidden",
          }}
        >
          <AiOutlineStar
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              clipPath: "inset(0 50% 0 0)",
              color: "gold",
            }}
          />
          <AiOutlineStar
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              clipPath: "inset(0 0 0 50%)",
              color: "gray",
            }}
          />
        </div>
      );
    } else {
      return <AiOutlineStar key={index} style={{ color: "gray" }} />;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {Array.from({ length: maxStars }, (_, index) => renderStar(index))}
    </div>
  );
};

export default StarRating;
