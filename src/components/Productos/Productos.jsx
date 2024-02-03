import React from "react";
import { montura,monturaDama } from "../../img";
import './Productos.scss'
import video from '../video/infantil.mp4'

export const Productos = () => {
  return (
    <div className="producto_contenedor">
      <h1 className="subtitulo">Productos</h1>
      <div className="card_container">
        <img className="producto_card" src={montura} alt="" />
        <img className="producto_card" src={monturaDama} alt="" />

        <video className="producto_card" muted autoPlay loop>
        <source src={video} type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>

        <iframe className="producto_card"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.528725614731!2d-75.56685903040454!3d6.2485867327462765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428f88321d515%3A0x181f3dd595daf571!2sCra.%2047%20%2349-89%2C%20La%20Candelaria%2C%20Medell%C3%ADn%2C%20La%20Candelaria%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1706050559263!5m2!1ses!2sco"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          width='500px'
          height='500px'
          style={{border:0}}
        ></iframe>
      </div>
    </div>
  );
};
