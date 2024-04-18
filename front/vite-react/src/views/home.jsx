import React from "react";
import Navbar from "../components/Navbar"; // Importa el componente Navbar
import Login from "./Login";

const Home = () => {
  return (
    <div>
      <Navbar /> {/* Renderiza el componente Navbar */}
      <h2>Bienvenido a tu spa</h2>
      <Login />
    </div>
  );
};

export default Home;
