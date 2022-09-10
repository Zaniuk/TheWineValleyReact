import React, { useEffect } from "react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-flex">
        <a href="#">
          <img id="logo" src="./public/img/Logo.png" alt="Logo" />
        </a>
        <div id="menu" className="menu">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <nav id="desplegable" className="desplegable">
          <div id="desplegable-conte" className="desplegable-conte">
            <a href="#" id="linea-contenido1" className="linea-contenido-sola">
              Nacionales
            </a>
            <a href="#" id="linea-contenido2" className="linea-contenido-sola">
              Importados
            </a>
            <a href="#" id="linea-contenido3" className="linea-contenido-sola">
              Exclusivos
            </a>
            <a href="#" id="linea-contenido4" className="linea-contenido-sola">
              Añejos
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
