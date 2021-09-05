import React, { Fragment, useState } from "react";
import { getName } from "country-list";
import { TiWeatherSunny } from "react-icons/ti";
import fondo from "../src/Imagenes/Soleado.jpg";
import "../src/Styles/App.css";
import Formulario from "./Formulario";
import Spinner from "./Spinner";

function App() {
  const [climaActual, setClimaActual] = useState(null);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [noCity, setNoCity] = useState(false);
  const [clima, setClima] = useState({
    ciudad: "",
    pais: "",
  });

  const { ciudad, pais } = clima;

  const apiRequest = async () => {
    setNoCity(false);
    setLoad(true);
    const api = "f1db9c38f1abba224e617221986060e0";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${api}`;

    const weatherRequest = await fetch(url);
    const weatherResponse = await weatherRequest.json();
    if (weatherResponse.cod === "404") {
      setNoCity(true);
      setLoad(false);
    } else {
      setClimaActual({
        Ciudad: weatherResponse.name,
        Templeratura: parseFloat(
          parseInt(weatherResponse.main.temp) - 273.15
        ).toFixed(1),
        Max: parseFloat(
          parseInt(weatherResponse.main.temp_max) - 273.15
        ).toFixed(1),
        min: parseFloat(
          parseInt(weatherResponse.main.temp_min) - 273.15
        ).toFixed(1),
        icon: weatherResponse.weather[0].icon,
        pais: getName(weatherResponse.sys.country),
      });
      setLoad(false);
    }
  };

  const getWeather = (e) => {
    e.preventDefault();
    if (ciudad.trim() === "" || pais.trim() === "") {
      setError(true);
      return;
    } else {
      setError(false);
      apiRequest();
      return;
    }
  };

  return (
    <div className="App">
      <img src={fondo} alt="Fondo de pantalla" className="fondoDePantalla" />
      <div className="containerMain">
        <div className="contanadorExteriorDeFormulario">
          <Formulario
            clima={clima}
            setClima={setClima}
            error={error}
            setError={setError}
            getWeather={getWeather}
          />
        </div>
        <div className="informacion">
          {load ? (
            <Spinner />
          ) : (
            <Fragment>
              {noCity && (
                <p className="errorCiudad">No se encontro la ciudad</p>
              )}
              {climaActual !== null ? (
                <Fragment>
                  <h4 className="lugar">
                    {climaActual.Ciudad} - {climaActual.pais}
                  </h4>
                  <h1 className="climaActual">{climaActual.Templeratura}°C</h1>
                  <img
                    src={`http://openweathermap.org/img/w/${climaActual.icon}.png`}
                    alt=""
                  />
                  <div className="temps">
                    <p>Max: {climaActual.Max}°C</p>
                    <p>Min: {climaActual.min}°C</p>
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <h4 className="lugar">Ciudad - País</h4>
                  <TiWeatherSunny className="iconoClima" />
                  <div className="temps">
                    <p>Max</p>
                    <p>Min</p>
                  </div>
                </Fragment>
              )}
            </Fragment>
          )}
          <div className="contanadorInteriorDeFormulario">
            <Formulario
              clima={clima}
              setClima={setClima}
              error={error}
              setError={setError}
              getWeather={getWeather}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
