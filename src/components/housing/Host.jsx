import housingdata from "../../datas/housingdata.json";
import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/components/_Host.scss"

function HousingHost() {

    const data = housingdata;
    const { id } = useParams();
    const currentLodgment = data.find((lodgment) => lodgment.id === id);
    const hostSplitName = currentLodgment.host.name.split(" ");
    const [name, lastname] = hostSplitName;
    
    return (
        <div>
        {currentLodgment && (
          <div className="host">
            <div className="host__name">
              <p className="host__name--n">{name}</p>
              <p className="host__name--ln">{lastname}</p>
            </div>
            <div
                style={{
                backgroundImage: `url(${currentLodgment.host.picture})`,
                }} className="host__picture">
            </div>
          </div>
        )}
      </div>
    );
}
    
export default HousingHost;