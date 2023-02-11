import React from "react";
import BannerAbout from "../components/about/BannerAbout";
import Header from "../components/utils/Header";
import Collapse from "../components/utils/Collapse";
import Footer from "../components/utils/Footer";
import aboutdata from "../datas/aboutdata.json";
import "../styles/utils/_Collapse.scss";
import "../styles/pages/_About.scss"


function About() {
    return (
      <div>
        <Header />
        <BannerAbout className="banner-contener" />
        <div className="collapse-contener-about">
        {aboutdata.map((item, index) => {
          return (
            <Collapse className="about" key={index} title={item.title} content={item.description} />
          );
        })}
        </div>
        <Footer />
      </div>
    );
}

export default About;