import React from "react";
import Header from "../components/Header";
import Banner from "../components/home/Banner";
import Card from "../components/home/Card";
import Footer from "../components/Footer";

function Home() {
    return (
      <div>
        <Header />
        <Banner />
        <Card />
        <Footer />
      </div>
    );
  }

  export default Home;