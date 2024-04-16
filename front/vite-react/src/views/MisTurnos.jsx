import React from 'react';
import myTurns from '../helpers/MyTurns';
import axios from 'axios';
import { useState, useEffect } from 'react'
import Turno from '../components/Turno.jsx';

const MisTurnos = () => {
    const [turns, setTurns] = useState(myTurns);
console.log(myTurns);
   

  return (
    <div>
      <h1>Mis Turnos</h1>
      <ul>
        {/* Mapear el arreglo de turnos y mostrar cada uno en una lista */}
        {turns.map((turn, index) => (
            <li key={index}>
                ID: {turn.id}, Date: {turn.date}
            </li>
        ))}
      </ul>



      <ul>
        {/* Mapear el arreglo de turnos y mostrar cada uno en una lista */}
        {turns.map((turn, index) => (
  <li key={index}>
    <Turno {...turn} />
  </li>
))}
      </ul>

    </div>
  );
}

export default MisTurnos;