import React from "react";
import { TiWeatherSunny } from "react-icons/ti";
import fondo from "../src/Imagenes/Soleado.jpg";
import "../src/Styles/App.css";
import Formulario from "./Formulario";

function App() {
  return (
    <div className="App">
      <img src={fondo} alt="Fondo de pantalla" className="fondoDePantalla" />
      <div className="containerMain">
        <Formulario />
        <div className="informacion">
          <h4 className="lugar">Arraijan - Panamá</h4>
          <h1 className="climaActual">21°C</h1>
          <TiWeatherSunny className="icono" />
          <div className="temps">
            <p>Max: 25°C</p>
            <p>Min: 18°C</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
