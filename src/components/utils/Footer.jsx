import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logofooter from "../../assets/logofooter.svg";
import "../../styles/utils/_Footer.scss";

export const FooterMarginTopResponsive = () => {
    const [marginTopResponsive, setMarginTopResponsive] = useState("0");
    const location = useLocation();
  
    useEffect(() => {
      if (location.pathname === "/") {
        setMarginTopResponsive("0");
      } else if (location.pathname === "/apropos") {
        setMarginTopResponsive("200px");
      } else if (location.pathname.startsWith("/logement")) {
        setMarginTopResponsive("200px");
      }
    }, [location]);
  
    return marginTopResponsive;
  };

function Footer({ marginTopResponsive }) {
    const [marginTop, setMarginTop] = useState("0");
    const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setMarginTop("0");
    } else if (location.pathname === "/apropos") {
      setMarginTop("300px");
    } else if (location.pathname.startsWith("/logement")) {
      setMarginTop("300px");
    }
  }, [location]);

  return (
    <footer className="footer" style={{ marginTop }}>
      <Link to="/">
        <img src={logofooter} className="footer__logo" alt="Logo Kasa blanc" />
      </Link>
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
