import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./views/Register";
import Login from "./views/Login";
import Home from "./components/home";
import MisTurnos from "./views/MisTurnos";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/turnos" element={<MisTurnos />} />
      </Routes>
    </div>
  );
};

export default App;
