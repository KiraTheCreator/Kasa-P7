import React, { useState } from "react";
import arrowup from "../../assets/arrowup.png";
import arrowdown from "../../assets/arrowdown.png";
import "../../styles/utils/_Collapse.scss"

function Collapse({ title, content, className }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={"collapse " + className}>
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="collapse__header__btn" onClick={() => setIsOpen(!isOpen)}>
          {title}
        </h3>
        <img
          src={isOpen ? arrowup : arrowdown}
          className="collapse__header__arrow"
          alt={isOpen ? "Fermer" : "Ouvrir"}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div className="collapse__content">
          {typeof content === "string" ? (
            <p className="collapse__content__text">{content}</p>
          ) : Array.isArray(content) || typeof content === "object" ? (
            <ul className="collapse__content__list">
              {Object.keys(content).map(key => (
                <li key={key} className="collapse__content__list__item">
                  {content[key]}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default Collapse;