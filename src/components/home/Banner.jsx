import React from "react";
import "../../styles/components/_Banner.scss";
import bannerhome from "../../assets/bannerhome.png";

function Banner() {
    return (
      <section className="banner">
        <img src={bannerhome} className="banner__img" alt="baniere accueil" />
        <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
      </section>
    )
}

  export default Banner;


