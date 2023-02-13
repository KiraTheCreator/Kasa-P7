import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import housingdata from "../../datas/housingdata.json";
import arrowLeft from "../../assets/arrowleft.png";
import arrowRight from "../../assets/arrowright.png";
import "../../styles/components/_Gallery.scss";

function Gallery() {

    const { id } = useParams()
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    let housing = housingdata.find(i => i.id === id)

    const clickLeft = () => {
        if (currentImageIndex === 0) {
          setCurrentImageIndex(housing.pictures.length - 1);
        } else {
          setCurrentImageIndex(currentImageIndex - 1);
        }
      };
      
      const clickRight = () => {
        if (currentImageIndex === housing.pictures.length - 1) {
          setCurrentImageIndex(0);
        } else {
          setCurrentImageIndex(currentImageIndex + 1);
        }
      };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(currentImageIndex === housing.pictures.length - 1 ? 0 : currentImageIndex + 1)
        }, 3500)
        return () => clearInterval(interval)
    }, [currentImageIndex, housing.pictures.length])

    return (
        <div className="gallery"
            style={{ backgroundImage: `url(${housing.pictures[currentImageIndex]})`}}>
            <div className={housing.pictures.length === 1 ? "gallery__icon--hidden" : "gallery__icon"}>
                <button className="gallery__icon__btn" onClick={clickLeft}><img src={arrowLeft} alt="Fleche gauche"></img></button>
                <button className="gallery__icon__btn" onClick={clickRight}><img src={arrowRight} alt="Fleche droite"></img></button>
            </div>
            { housing.pictures.length > 1 &&
            <p className="gallery__text">{currentImageIndex +1}/{housing.pictures.length}</p>
          }
        </div>
    )
}

export default Gallery