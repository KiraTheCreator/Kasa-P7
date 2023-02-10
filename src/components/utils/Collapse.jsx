import housingdata from "../../datas/housingdata.json";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Collapse({ key = "description" }) {
  const data = housingdata;
  const { id } = useParams();
  const currentLodgment = data.find((lodgment) => lodgment.id === id);
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div>
      <button onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? "Afficher" : "Masquer"}
      </button>
      {!isCollapsed && currentLodgment && (
        <div>
            <p>{currentLodgment[key]}</p>
        </div>
      )}
    </div>
  );
}

export default Collapse;


