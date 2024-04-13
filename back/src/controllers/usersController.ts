import { Request, Response } from "express";
import IUser from "../interfaces/IUser";
import {
  getAllUser,
  getAllUserById,
  createUser,
} from "../services/usersService";
import {
  validarContrasena,
  validarUsuarioPorNombre,
} from "../services/credentialService";

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const usersGetCtro: IUser[] = await getAllUser();
    res.status(200).json(usersGetCtro);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
export const getUsersIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userIdgetctro: IUser = await getAllUserById(Number(id));
    res.status(200).json(userIdgetctro);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
export const createUserController = async (req: Request, res: Response) => {
  try {
    const userData: IUser = req.body;
    const newUser = await createUser(userData);
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(500).json({ message: "jddd", error });
  }
};
// export const postUserResgisterController = async (
//   req: Request,
//   res: Response
// ) => {
//   try {
//     const userData: IUser = req.body;
//     const userRe = await createUsers(userData);
//     res.status(200).json(userRe);
//   } catch (error: any) {
//     res.status(400).json({ message: error.message });
//   }
// };

export const postUserLoginController = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    // Busca el usuario por su nombre de usuario
    const user = await validarUsuarioPorNombre(username);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Valida la contraseña del usuario
    const passwordCorrect = await validarContrasena(username, password);

    if (!passwordCorrect) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    // Aquí puedes continuar con el manejo de la respuesta si la validación es exitosa
    res.status(200).json({ message: "Inicio de sesión exitoso" });
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
