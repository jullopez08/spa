import React from 'react';
import myTurns from '../helpers/MyTurns';
import axios from 'axios';
import { useState, useEffect } from 'react'
import Turno from '../components/Turno.jsx';

const MisTurnos = () => {
    const [turns, setTurns] = useState([]);
    useEffect(() => {
        const fetchTurns = async () => {
          try {
            const response = await axios.get('http://localhost:3000/appointments');
            setTurns(response.data);
            console.log(response.data);
          } catch (error) {
            console.error('Error al obtener los turnos:', error);
          }
        };
    
        fetchTurns();
      }, []); 

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