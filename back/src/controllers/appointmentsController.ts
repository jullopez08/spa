import { Request, Response } from "express";

export const getAptmentsCtroller = (req: Request, res: Response) => {
  res.send("Obtener el listado de todos los turnos de todos los usuarios.");
};

export const getAptmentCtroller = (req: Request, res: Response) => {
  res.send("Obtener el detalle de un turno específico.");
};

export const postAptmentScheduleCtroller = (req: Request, res: Response) => {
  res.send("Agendar un nuevo turno.");
};

export const putAptmentCancelCtroller = (req: Request, res: Response) => {
  res.send("Cambiar el estatus de un turno a “cancelled”.");
};
