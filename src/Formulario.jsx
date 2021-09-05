import React from "react";
import "../src/Styles/formulario.css";

const Formulario = (props) => {
  const { clima, setClima, error, getWeather } = props;

  const handleChange = (e) => {
    setClima({
      ...clima,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="formulario" onSubmit={getWeather}>
      <div className="ciudadContainer">
        <input
          type="text"
          name="ciudad"
          className="ciudadInput"
          autoComplete="off"
          required
          onChange={handleChange}
        />
        <label htmlFor="city" className="labelCity">
          <span>Ciudad</span>
        </label>
      </div>
      <select name="pais" id="" className="paisesInput" onChange={handleChange}>
        <option value=""> --País-- </option>
        <option value="PA">Panama</option>
        <option value="US">Estados Unidos</option>
        <option value="PE">Peru</option>
        <option value="CR">Costa Rica</option>
        <option value="MX">Mexico</option>
      </select>
      {error && (
        <p className="errorMessage">Todos los campos son obligatorios</p>
      )}
      <input type="submit" value="Ver clima" className="boton" />
    </form>
  );
};

export default Formulario;
