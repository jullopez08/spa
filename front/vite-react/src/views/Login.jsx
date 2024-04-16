// views/Login.jsx
import React from 'react';
import { useState } from 'react';

const Login = () => {
   const [formLData, setFormLData]= useState({
    username: '',
    password: ''
   })

   const renderLogin = (e) =>{
    const {name, value} = e.target;
    setFormLData({
      ...formLData,
      [name]: value
    })
   }
   const btnSubmit =(e) =>{
    e.preventDefault();
    console.log(formLData);
   }
  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={btnSubmit}>
        <div>
          <label htmlFor="username">username</label>
          <input type="text"
          id='username' name='username'
          value={formLData.username}
          onChange={renderLogin} required/>
          <label htmlFor="password">contraseña</label>
          <input type="password" id='password' name='password' value={formLData.password} onChange={renderLogin} required />
        </div>
        <button type='submit'>Iniciar seccion</button>
      </form>
      
    </div>
  );
}

export default Login;
