import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useContextDentist } from "../Components/utils/global.context";
import doctor from "../Assets/doctor-1.png";
import "../Styles/Favs.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { data } = useContextDentist();

  useEffect(() => {}, [data]);

  return (
    <>
      <h1 className="title__fav">Dentistas Favoritos</h1>
      {data.length == [] ? (
        <div className="not-fav">
          <p className="not-fav__p">
            No tienes Dentistas agregados a favoritos
          </p>
          <img className="not-fav__img" src={doctor} alt="doctor-1" />
        </div>
      ) : (
        <div className="card-grid">
          {/* este componente debe consumir los destacados del localStorage */}
          {/* Deberan renderizar una Card por cada uno de ellos */}
          {data.map((dentist) => {
            return (
              <Card
                key={dentist.id}
                name={dentist.name}
                username={dentist.username}
                id={dentist.id}
                fav={true}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Favs;
