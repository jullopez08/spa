// En el servicio de turnos:

import { log } from "console";
import IAppointment from "../interfaces/IAppointment";

// Implementar una función que pueda retornar el arreglo completo de turnos.

// Implementar una función que pueda obtener el detalle de un turno por ID.

// Implementar una función que pueda crear un nuevo turno, siempre guardando, además, el ID del usuario que ha creado dicho turno. NO PUEDE HABER UN TURNO SIN ID DE USUARIO.

// Implementar una función que reciba el id de un turno específico y una vez identificado el turno correspondiente, cambiar su estado a “cancelled”.
let id_turno: number = 0;
const turnos: IAppointment[] = [];

function id_T(): number {
  return id_turno++;
}

export const getAllTurnos = async (): Promise<IAppointment[]> => {
  const allTurno: IAppointment[] = turnos;
  if (!allTurno) {
    throw Error("no se encontro Turno");
  } else {
    return allTurno;
  }
};

export const getAllTurnoById = async (
  turnoId: number
): Promise<IAppointment> => {
  const buscarTurno: IAppointment | undefined = turnos.find(
    (turno) => turno.id === turnoId
  );
  if (!buscarTurno) throw Error(" no se encontro turno");
  return buscarTurno;
};

export const createTurnos = async (
  turnoDto: IAppointment
): Promise<IAppointment> => {
  try {
    let turno_id: number = id_T();
    const newTurno: IAppointment = {
      id: turno_id,
      date: turnoDto.date,
      time: turnoDto.time,
      userId: turnoDto.userId,
      status: turnoDto.status,
    };
    turnos.push(newTurno);

    return newTurno;
  } catch (error) {
    console.error("Error al crear el turno ", error);
    throw error;
  }
};
export const cancelTurno = async (turnoId: number): Promise<void> => {
  const turnoIdx = turnos.findIndex((turno) => turno.id === turnoId); //buscar

  if (turnoIdx !== -1) {
    turnos[turnoIdx].status = "cancelled";
    console.log(`Turno con ID ${turnoId} cancelado con exito`);
  } else {
    console.log(`No se encontro Turno con Id ${turnoId}`);
  }
};
