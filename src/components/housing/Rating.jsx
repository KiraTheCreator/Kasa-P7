import housingdata from "../../datas/housingdata.json";
import React from "react";
import { useParams } from "react-router-dom";
import fullstar from "../../assets/fullstar.png";
import star from "../../assets/star.png";
import "../../styles/components/_Rating.scss"

function Rating() {
  const data = housingdata;
  const { id } = useParams();
  const currentLodgment = data.find((lodgment) => lodgment.id === id);
  const rating = currentLodgment.rating;

  return (
    <div className="rating">
      {Array(5)
        .fill(null)
        .map((index, i) => (
          <img
            key={i}
            src={
              i < rating
                ? fullstar
                : star
            }
            alt= {rating}
            className="rating__star"
          />
        ))}
    </div>
  );
}

export default Rating;