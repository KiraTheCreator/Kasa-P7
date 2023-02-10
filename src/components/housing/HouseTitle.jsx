import React from "react";
import Location from "../housing/Location";
import Tags from "../housing/Tags";
import Host from "../housing/Host";
import Rating from "../housing/Rating";
import "../../styles/components/_HouseTitle.scss"

function HousingTitle() {
    return (
        <div className="housing-title-contener">
            <div className="housing-title-contener__first">
                <Location className="location"/>
                <Tags className="tags"/>
            </div>
            <div className="housing-title-contener__second">
                <Host className="host"/>
                <Rating className="rating"/>
            </div>
        </div>
    );
}

export default HousingTitle