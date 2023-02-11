import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/utils/Header";
import "../styles/pages/_Error.scss";

function Error() {
  return (
    <div>
      <Header />
      <section className="error-contener">
        <h1 className="error-contener__title">404</h1>
        <p className="error-contener__subtitle">Oups! La page que vous demandez n'existe pas.</p>
        <Link className="error-contener__link" to="/">
          Retourner sur la page d'accueil
        </Link>
      </section>
    </div>
  );
}

export default Error;