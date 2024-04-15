// En el servicio de credenciales:

import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/credential";

// Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos. Debe retornar el ID del par de credenciales creado.

// Implementar una función que recibirá username y password, y deberá chequear si el nombre de usuario existe entre los datos disponibles y, si es así, si el password es correcto. En caso de que la validación sea exitosa, deberá retornar el ID de las credenciales.

const credentials: Credential[] = [];

// Función para crear un nuevo conjunto de credenciales
export const createCredentials = async (username: string, password: string) => {
  const crtialRepository = AppDataSource.getRepository(Credential);
  const cretialData = await crtialRepository.create({ username, password });

  const rsulCrt = await crtialRepository.save(cretialData);
  return rsulCrt;
};
// Función para validar las credenciales
export const validarCredentials = async (
  username: string,
  password: string
): Promise<number | undefined> => {
  try {
    // Buscar las credenciales en la base de datos
    const foundCredential = await AppDataSource.getRepository(
      Credential
    ).findOne({
      where: {
        username,
      },
    });

    // Verificar si se encontraron las credenciales y si la contraseña es correcta
    if (foundCredential && foundCredential.password === password) {
      return foundCredential.id; // Retorna el ID del par de credenciales si las credenciales son válidas
    } else {
      return undefined; // Retorna 'undefined' si las credenciales no son válidas
    }
  } catch (error) {
    console.error("Error al validar las credenciales y obtener el ID:", error);
    throw error;
  }
};
//   const appDataCredential = AppDataSource.getRepository(Credential);

//   const foundCredential = appDataCredential.findOne({
//     where: {
//       username,
//     },
//   });

//   if (foundCredential && foundCredential.password === password) {
//     return foundCredential.id;
//   } else {
//     throw new Error("Credenciales no válidas");
//   }
// };
// export async function validarUsuarioPorNombre(
//   username: string
// ): Promise<Credential | undefined> {
//   try {
//     const user = credentials.find(
//       (credential) => credential.username === username
//     );
//     return user;
//   } catch (error) {
//     console.error("Error al buscar el usuario por nombre de usuario:", error);
//     throw error;
//   }
// }
// export async function validarContrasena(
//   username: string,
//   password: string
// ): Promise<boolean> {
//   try {
//     const user = await validarUsuarioPorNombre(username);
//     if (user && user.password === password) {
//       return true; // La contraseña es válida
//     } else {
//       return false; // La contraseña no es válida
//     }
//   } catch (error) {
//     console.error("Error al validar la contraseña del usuario:", error);
//     throw error;
//   }
// }
