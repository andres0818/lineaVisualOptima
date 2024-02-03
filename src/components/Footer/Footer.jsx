import React from "react";
import { QrInstagram } from "../../img";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container_info">
        <div>
          <h1>Linea visual optica</h1>
          <p>
            Telefono:{" "}
            <strong>
              <a href="tel:+573014529292">3014529292</a>
            </strong>
          </p>
          <p>
            <strong>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/Cra.+47+%2349-89,+La+Candelaria,+Medell%C3%ADn,+La+Candelaria,+Medell%C3%ADn,+Antioquia/@6.2485881,-75.5675028,18z/data=!3m1!4b1!4m6!3m5!1s0x8e4428f88321d515:0x181f3dd595daf571!8m2!3d6.2485854!4d-75.5662153!16s%2Fg%2F11j2mmr99f?hl=es&entry=ttu"
              >
                Direccion: Cr 47 #49-99
              </a>
            </strong>
          </p>
        </div>
        <div>
          <a
            href="https://www.instagram.com/lineavisualoptima?igsh=MXJobWk4ODl0dHIwcA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="img" src={QrInstagram} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
