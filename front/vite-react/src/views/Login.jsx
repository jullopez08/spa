import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
const Login = () => {
  // Estado local para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Estado local para almacenar el mensaje de error
  const [error] = useState("");

  // Función para manejar cambios en los inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Realizar la petición POST al servidor para el login
      const response = await axios.post(
        "http://localhost:3000/users/login",
        formData
      );
      alert("Se ha iniciado seccion!");
      console.log(response.data); // Aquí puedes manejar la respuesta del servidor, como redireccionar al usuario a otra página
      navigator("/home"); // Mensaje de error si las credenciales son incorrectas
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("¡Oops! Nombre de usuario o contraseña incorrectos."); // Mensaje de error si las credenciales son incorrectas
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      {error && <p>{error}</p>} {/* Mostrar mensaje de error */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Nombre de Usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
