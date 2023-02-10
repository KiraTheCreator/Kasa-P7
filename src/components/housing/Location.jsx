import housingdata from "../../datas/housingdata.json";
import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/components/_Location.scss"


function HousingTitle() {
  const data = housingdata;
  const { id } = useParams();
  const currentLodgment = data.find((lodgment) => lodgment.id === id);

  return (
    <div className="housing-title">
        {currentLodgment && (
            <div>
                <h1 className="housing-title__title">{currentLodgment.title}</h1>
                <h2 className="housing-title__location">{currentLodgment.location}</h2>
            </div>
      )}
    </div>
  );
}

export default HousingTitle;