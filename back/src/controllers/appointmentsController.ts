import { Request, Response } from "express";
import IAppointment from "../interfaces/IAppointment";
import {
  createTurnos,
  getAllTurnoById,
  getAllTurnos,
  cancelTurno,
} from "../services/appointmentsService";

export const getAptmentsCtroller = async (req: Request, res: Response) => {
  try {
    const turnoGetCtro: IAppointment[] = await getAllTurnos();
    res.status(200).json(turnoGetCtro);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getAptmentCtroller = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const turnoIdGetCtro: IAppointment = await getAllTurnoById(Number(id));
    res.status(200).json(turnoIdGetCtro);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const postAptmentScheduleCtroller = async (
  req: Request,
  res: Response
) => {
  try {
    const { id, date, time, userId, status }: IAppointment = req.body;
    const agendaTurno: IAppointment = await createTurnos({
      id,
      date,
      time,
      userId,
      status,
    });
    res.status(200).json(agendaTurno);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const putAptmentCancelCtroller = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const turnoCancelar = await cancelTurno(id);
    res.status(200).json(turnoCancelar);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
