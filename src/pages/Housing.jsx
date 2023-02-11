// import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/utils/Header"
import Gallery from "../components/housing/Gallery";
import HousingTitle from "../components/housing/HouseTitle";
import Collapse from "../components/utils/Collapse";
import Footer from "../components/utils/Footer";
import housingdata from "../datas/housingdata.json";
import "../styles/pages/_Housing.scss";

function Housing() {
  const { id } = useParams();
  const housing = housingdata.find((item) => item.id === id);

  return (
    <div>
      <Header />
      <Gallery />
      <HousingTitle />
      <div className="collapse-contener-housing">
      {housing && (
        <Collapse title="Description" content={housing.description} />
      )}
      {housing && (
        <Collapse title="Équipements" content={housing.equipments} />
      )}
      </div>
      <Footer />
    </div>
  );
}

export default Housing;