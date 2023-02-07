import React from "react";
import { Link } from "react-router-dom";
import logofooter from "../assets/logofooter.svg"
import "../styles/_Footer.scss"

function Footer() {
    return (
        <footer className="footer">
            <Link to="/"><img src={logofooter} className="footer__logo" alt="Logo Kasa blanc" /></Link>
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
      );
}

export default Footer