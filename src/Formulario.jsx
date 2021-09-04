import React from "react";
import "../src/Styles/formulario.css";

const Formulario = () => {
  return (
    <form className="formulario">
      <div className="ciudadContainer">
        <input
          type="text"
          name="city"
          id=""
          className="ciudadInput"
          autoComplete="off"
          required
        />
        <label htmlFor="city" className="labelCity">
          <span>Ciudad</span>
        </label>
      </div>
      <select name="" id="" className="paisesInput">
        <option value=""> --País-- </option>
        <option value="">Panama</option>
        <option value="">Estados Unidos</option>
        <option value="">Peru</option>
        <option value="">Costa Rica</option>
        <option value="">Mexico</option>
      </select>
      <input type="submit" value="Ver clima" className="boton" />
    </form>
  );
};

export default Formulario;
