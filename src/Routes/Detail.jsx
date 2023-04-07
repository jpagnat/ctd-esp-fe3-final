import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import doctor from "../Assets/doctor.jpg";
import "../Styles/Detail.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [singleDentist, setSingleDentist] = useState({});
  const paramsForDentist = useParams();

  const getSingleDentist = async () => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + paramsForDentist.id
    ).then((response) => {
      return response.json();
    });
    setSingleDentist(data);
  };

  useEffect(() => {
    getSingleDentist();
  }, []);

  return (
    <>
      <h1 className="detail__title">¡Gran elección!</h1>
      <p className="detail__p">
        Estos son los datos de contacto de tu Dentista
      </p>
      {/* Aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className="detail-container">
        <img src={doctor} alt="doctor" />
        <div className="detail__datos">
          <p>Nombre: {singleDentist.name}</p>
          <p>Email: {singleDentist.email}</p>
          <p>Telefono: {singleDentist.phone}</p>
          <p>Web: {singleDentist.website}</p>
        </div>
      </div>
    </>
  );
};

export default Detail;
