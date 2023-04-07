import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useContextDentist } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { themeState, themeDispatch } = useContextDentist();

  const switchTheme = () => {
    if (themeState.theme) {
      themeDispatch({ type: "SWITCH_DARK" });
    } else {
      themeDispatch({ type: "SWITCH_LIGHT" });
    }
  };

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div>
        <Link className="link__navbar" to="/">
          Home
        </Link>
        <Link className="link__navbar" to="/favs">
          Favorites
        </Link>
        <Link className="link__navbar" to="/contact">
          Contact
        </Link>
      </div>
      <button
        className="btn__navbar"
        onClick={switchTheme}
        style={{ backgroundColor: themeState.btn }}
      >
        {themeState.theme ? (
          <FontAwesomeIcon icon={faMoon} className="moon-icon" />
        ) : (
          <FontAwesomeIcon icon={faSun} className="sun-icon" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
