import React from "react";
import "./Servicios.scss";
import { chat, tienda, like, enviar } from "../../img/index";

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
