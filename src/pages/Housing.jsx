import React from "react";
import Header from "../components/Header"
import Gallery from "../components/housing/Gallery";
import HousingTitle from "../components/housing/HouseTitle";

function Housing() {
    return (
        <div>
            <Header />
            <Gallery />
            <HousingTitle />
        </div>
    )
}

export default Housing