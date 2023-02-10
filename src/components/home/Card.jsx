import { useNavigate } from 'react-router-dom';
import housingdata from "../../datas/housingdata.json";
import "../../styles/components/_Card.scss";

function Card() {
  const data = housingdata
  const navigate = useNavigate()

  return (
    <section className="housing-contener">
      {
        data.map((elem) => (
          <article
            key={elem.id}
            className="housing-card"
            onClick={() => navigate(`logement/${elem.id}`)}>
            <h2 className="housing-card__title">{elem.title}</h2>
            <div className={`filter ${"housing-card__img"}`}><img src={elem.cover} className="housing-card__img" alt={elem.title} /></div>
          </article>
        ))
      }
    </section>
  )
}

export default Card