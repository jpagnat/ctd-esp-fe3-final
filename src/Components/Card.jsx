import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import doctor from "../Assets/doctor.jpg";
import { useContextDentist } from "./utils/global.context";
import "../Styles/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const Card = ({ name, username, id, fav }) => {
  const { data, setData, themeState } = useContextDentist();
  const [favorited, setFavorited] = useState(fav);

  const isFav = (dentistId) => {
    return data.some((dentist) => dentist.id === dentistId);
  };

  const removeDentist = (id) => {
    const updatedData = data.filter((dentist) => dentist.id !== id);
    setData(updatedData);
    localStorage.setItem("favoritesDentists", JSON.stringify(updatedData));
  };

  const updateFav = async (id) => {
    if (isFav(id)) {
      removeDentist(id);
      setFavorited(false);
      toast.info("Se ha quitado de favoritos", {
        autoClose: 2000,
      });
    } else {
      setFavorited(true);
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + id
      ).then((response) => {
        return response.json();
      });
      setData((prevData) => [...prevData, data]);
      toast.success("Agregado a favoritos", {
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <Link to={`dentist/${id}`} className="link">
        <img src={doctor} alt={name} className="card__img" />
        <div
          className="id-container"
          style={{ backgroundColor: themeState.bgColor }}
        >
          <p className="card__id" style={{ color: themeState.color }}>
            {id}
          </p>
        </div>
        <p className="card__name" style={{ color: themeState.color }}>
          {name} {username}
        </p>
      </Link>

      <button onClick={() => updateFav(id)} className="favButton">
        <FontAwesomeIcon
          icon={faHeart}
          className={favorited ? "favActive" : "heart-icon"}
        />
      </button>
    </div>
  );
};

export default Card;
