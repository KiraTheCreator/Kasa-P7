import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/_Header.scss";

function Header() {
    return (
        <header className="header">  
            <NavLink to="/"><img src={logo} className="header__logo" alt="Logo Kasa principal"/></NavLink>
            <nav>
                <ul className="header__nav">
                    <NavLink className="header__nav--link" to="/"><li>Accueil</li></NavLink>
                    <NavLink className="header__nav--link" to="/apropos"><li>A propos</li></NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default Header