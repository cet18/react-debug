import React from "react";
import "./styles/Footer.css"
const logos = [
  {
    textoAternativo: "CineArtv",
    srcDelLogo: "http://cine.ar/img/tv.cine.ar.svg",
  },
  {
    textoAternativo: "CineArplay",
    srcDelLogo: "http://cine.ar/img/play.cine.ar.svg",
  },
  {
    textoAternativo: "CinArestrenos",
    srcDelLogo: "http://cine.ar/img/estrenos.cine.ar.svg",
  },
];

const transformarLogo = logos.map(({ textoAlternativo, srcDelLogo }) => (
  <li className="li-logo">
    <a className="a-logo" href="/">
      <img className="img-logo " src={srcDelLogo} alt={textoAlternativo} />
    </a>
  </li>
));

const PieDePagina = () => {
  return (
    <footer>
      <div className="logoCineAr">
        <ul>
          <li>{transformarLogo}</li>
        </ul>
      </div>
    </footer>
  );
};

export default PieDePagina;
