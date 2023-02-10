import React from "react";
import Header from "../components/Header"
import Gallery from "../components/housing/Gallery";
import HousingTitle from "../components/housing/HouseTitle";
import Collapse from "../components/utils/Collapse";
import Footer from "../components/Footer"

function Housing() {
    return (
        <div>
            <Header />
            <Gallery />
            <HousingTitle />
            <Collapse />
            <Footer />
        </div>
    )
}

export default Housing