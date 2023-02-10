import React from "react";
import "../../styles/components/_Banner.scss";
import bannerabout from "../../assets/bannerabout.png";

function BannerAbout() {
    return (
      <section className="banner">
        <img src={bannerabout} className="banner__img" alt="baniere a propos" />
      </section>
    )
}

  export default BannerAbout;