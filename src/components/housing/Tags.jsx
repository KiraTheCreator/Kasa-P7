import housingdata from "../../datas/housingdata.json";
import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/components/_Tags.scss"

function HousingTags() {
const data = housingdata;
const { id } = useParams();
const currentLodgment = data.find((lodgment) => lodgment.id === id);

return (

    <div className="housing-tags">
      {currentLodgment && (
        <div className="housing-tags__contener">
          {currentLodgment.tags.map((tag) => (
            <span key={tag} className="housing-tags__contener__span">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default HousingTags;