import React from "react";
import imgFooter from "../Assets/DH.png";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>Powered by</p>
      <img src={imgFooter} alt="DH-logo" className="footer__img" />
      <p>
        {" "}
        &{" "}
        <a href="https://www.linkedin.com/in/julianpagnat/" target="_blank">
          Julián Pagnat
        </a>
      </p>
    </footer>
  );
};

export default Footer;
