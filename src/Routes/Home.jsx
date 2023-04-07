import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import "../Styles/Home.css";
import { useContextDentist } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const [dentistsFav, setDentistsFav] = useState([]);

  const { themeState } = useContextDentist();

  const getDentists = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
      (response) => {
        return response.json();
      }
    );

    const localDentists = JSON.parse(localStorage.getItem("favoritesDentists"));
    setDentistsFav(localDentists);

    const dataFilter = data.filter(
      (item) => !localDentists.some((otherItem) => otherItem.id === item.id)
    );

    setDentists(dataFilter);
  };

  useEffect(() => {
    getDentists();
  }, []);

  return (
    <main>
      <div className="title-container">
        <h1 style={{ color: themeState.color }}>¡Bienvenidos!</h1>
        <p style={{ color: themeState.color }}>
          Seleccione un dentista para obtener más información
        </p>
      </div>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {dentists.map((dentist) => {
          return (
            <Card
              key={dentist.id}
              name={dentist.name}
              id={dentist.id}
              username={dentist.username}
              fav={false}
            />
          );
        })}
        {dentistsFav.map((dentist) => {
          return (
            <Card
              key={dentist.id}
              name={dentist.name}
              id={dentist.id}
              username={dentist.username}
              fav={true}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Home;
