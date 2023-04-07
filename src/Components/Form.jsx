import React, { useState, useEffect } from "react";
import "../Styles/Form.css";
import { toast } from "react-toastify";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [userContact, setUserContact] = useState({ name: "", email: "" });
  const [contactOK, setContactOK] = useState(false);
  const [contactError, setContactError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (emailRegex.test(userContact.email) && userContact.name.length > 5) {
      setContactOK(true);
      setContactError(false);
      toast.success("Enviado", {
        autoClose: 2000,
      });
      setTimeout(() => {
        setUserContact({ name: "", email: "" });
        setContactOK(null);
      }, 5000);
    } else {
      toast.error("El nombre debe tener al menos 5 caracteres", {
        autoClose: 2000,
      });
      setContactError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Ingrese su nombre</label>
          <input
            type="text"
            value={userContact.name}
            onChange={(e) =>
              setUserContact({ ...userContact, name: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="">Ingrese su email</label>
          <input
            value={userContact.email}
            type="email"
            onChange={(e) =>
              setUserContact({ ...userContact, email: e.target.value })
            }
          />
        </div>
        <button>Enviar</button>
      </form>

      {contactOK ? (
        <p className="response-form">
          Gracias {userContact.name}, te contactaremos cuanto antes vía mail
        </p>
      ) : null}
      {contactError ? (
        <p className="response-form">
          Por favor verifique su información nuevamente
        </p>
      ) : null}
    </div>
  );
};

export default Form;
