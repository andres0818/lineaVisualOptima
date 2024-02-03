import React from "react";
import "./Servicios.scss";
import {
  chat,
  tienda,
  like,
  enviar,
  instagram,
  whatsApp,
} from "../../img/index";

let urlInstagram = 'https://www.instagram.com/lineavisualoptima?igsh=MXJobWk4ODl0dHIwcA%3D%3D&utm_source=qr'

const Servicios = () => {
  return (
    <div className="servicios">
      <div className="contenedor">
        <div className="card">
          <h2 className="subtitulo">Que hacemos?</h2>
          <p>- Examen de Optometria</p>
          <p>- Lentes Oftalmicos (Gafas)</p>
          <p>- Lentes de Contacto (Formulados / Cosmeticos)</p>
          <p>- Monturas</p>
          <p>- Gafas de Sol</p>
          <p>- Reparacion de Monturas</p>
          <div className="contactenos">
          <h1><strong>Contactenos</strong></h1>
            <a href="http://wa.me/+573014529292" target="_blank">
              <img src={whatsApp} alt="whatsApp" />
            </a>
            <a href={urlInstagram} target="_blank">
              <img src={instagram} alt="whatsApp" />
            </a>
          </div>
        </div>
        <div className="optica">
          <img src={tienda} alt="" srcset="" />
          <div className="iconos">
            <img src={like} alt="" srcset="" />
            <img src={chat} alt="" srcset="" />
            <img src={enviar} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
