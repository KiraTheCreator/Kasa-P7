import { useNavigate } from 'react-router-dom';
import housingdata from "../datas/housingdata.json";


function Card() {
  const data = housingdata
  const navigate = useNavigate()

  return (
    <section className="housing-contener">
      {data.map((elem) => {
        return (
          <article
            key={elem.id}
            className="housing-contener__card"
            onClick={() => navigate(`logement/${elem.id}`)}
            style={{ backgroundImage: `url(${elem.cover})` }}
          >
            <div className="housing-contener__card--filter">
              <h2 className="housing-contener__card--title">{elem.title}</h2>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Card
