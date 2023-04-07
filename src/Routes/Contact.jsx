import React from "react";
import Form from "../Components/Form";
import "../Styles/Contact.css";
import { useContextDentist } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { themeState } = useContextDentist();

  return (
    <div className="contact-container">
      <h1 className="contact__title" style={{ color: themeState.color }}>
        ¿Necesitas más información?
      </h1>
      <p className="contact__p" style={{ color: themeState.color }}>
        Envianos tus datos y te contactamos a la brevedad
      </p>
      <Form />
    </div>
  );
};

export default Contact;
