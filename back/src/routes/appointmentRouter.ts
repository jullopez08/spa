// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.

// GET /appointment => Obtener el detalle de un turno específico.

// POST /appointment/schedule => Agendar un nuevo turno.

// PUT /appointment/cancel => Cambiar el estatus de un turno a “cancelled”.
import { Router } from "express";
import {
  getAptmentsCtroller,
  getAptmentCtroller,
  postAptmentScheduleCtroller,
  putAptmentCancelCtroller,
} from "../controllers/appointmentsController";

const router: Router = Router();

router.get("/", getAptmentsCtroller);

router.get("/appointment", getAptmentCtroller);

router.post("/appointment/schedule", postAptmentScheduleCtroller);

router.put("/appointment/cancel", putAptmentCancelCtroller);

export default router;
