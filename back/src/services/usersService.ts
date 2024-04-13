// En el servicio de usuarios:

// Implementar una función que pueda retornar el arreglo completo de usuarios.

// Implementar una función que pueda retornar un elemento del arreglo que haya sido identificado por id.

// Implementar una función que pueda crear un nuevo usuario dentro del arreglo PERO ten en cuenta que al momento de crear el usuario, debe crear su correspondiente par de credenciales llamando a la función correspondiente del servicio de credenciales. Al recibir de esta función el id de las credenciales, debe guardar el dato en la propiedad credentialsId.

import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import IUser from "../interfaces/IUser";

const users: IUser[] = [];

export const getAllUser = async () => {
  const allUser = await AppDataSource.getRepository(User).find();
  if (!allUser) {
    throw Error("no se encuentra usuario");
  } else {
    return allUser;
  }
};
export const getAllUserById = async (userId: number): Promise<IUser> => {
  const buscaUser: IUser | undefined = users.find((user) => user.id === userId);
  if (!buscaUser) throw Error("no se encuentra usuario");
  return buscaUser;
};
// export const createUser = async (
//   users: Omit<IUser, "id" | "credentialsId">
// ) => {
//   const user = await AppDataSource.getRepository(User).create(users);
//   const respuesta = await AppDataSource.getRepository(User).save(user);
//   return respuesta;
// };
export async function createUser(user: Omit<IUser, "id" | "credentialsId">) {
  try {
    // Verifica que el campo 'name' no esté vacío
    if (!user.name) {
      throw new Error('El campo "name" es obligatorio.');
    }

    const userRepository = AppDataSource.getRepository(User);

    // Crea una nueva instancia de User a partir de los datos proporcionados
    const newUser = userRepository.create(user);

    // Guarda el nuevo usuario en la base de datos
    const savedUser = await userRepository.save(newUser);

    return savedUser;
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    throw error;
  }
}
