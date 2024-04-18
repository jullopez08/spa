import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/register">Registrarse</Link>
        </li>
        <li>
          <Link to="/login">Iniciar sesión</Link>
        </li>
        <li>
          <Link to="/turnos">Mis turnos</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
