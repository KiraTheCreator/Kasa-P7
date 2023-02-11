import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "../../styles/utils/_Header.scss";

function Header() {
    return (
        <header className="header">  
            <Link to="/"><img src={logo} className="header__logo" alt="Logo Kasa principal"/></Link>
            <nav>
                <ul className="header__nav">
                    <Link className="header__nav--link" to="/"><li>Accueil</li></Link>
                    <Link className="header__nav--link" to="/apropos"><li>A propos</li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header