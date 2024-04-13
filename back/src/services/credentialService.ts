// En el servicio de credenciales:

// Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos. Debe retornar el ID del par de credenciales creado.

// Implementar una función que recibirá username y password, y deberá chequear si el nombre de usuario existe entre los datos disponibles y, si es así, si el password es correcto. En caso de que la validación sea exitosa, deberá retornar el ID de las credenciales.

import ICredential from "../interfaces/ICredential";

let id_Credential: number = 1;
const credentials: ICredential[] = [];

// Función para generar un ID único para cada conjunto de credenciales
function generateCredentialId(): number {
  return id_Credential++;
}
// Función para crear un nuevo conjunto de credenciales
export const createCredentials = async (
  credentialDto: ICredential
): Promise<number> => {
  const newCredential: ICredential = {
    id: generateCredentialId(),
    username: credentialDto.username,
    password: credentialDto.password,
  };
  credentials.push(newCredential);
  return newCredential.id;
};
// Función para validar las credenciales
export const validarCredentials = async (
  credentialDto: ICredential
): Promise<number> => {
  const foundCredential = credentials.find(
    (credential) =>
      credential.username === credentialDto.username &&
      credential.password === credentialDto.password
  );

  if (foundCredential) {
    return foundCredential.id;
  } else {
    throw new Error("Credenciales no válidas");
  }
};
export async function validarUsuarioPorNombre(
  username: string
): Promise<ICredential | undefined> {
  try {
    const user = credentials.find(
      (credential) => credential.username === username
    );
    return user;
  } catch (error) {
    console.error("Error al buscar el usuario por nombre de usuario:", error);
    throw error;
  }
}
export async function validarContrasena(
  username: string,
  password: string
): Promise<boolean> {
  try {
    const user = await validarUsuarioPorNombre(username);
    if (user && user.password === password) {
      return true; // La contraseña es válida
    } else {
      return false; // La contraseña no es válida
    }
  } catch (error) {
    console.error("Error al validar la contraseña del usuario:", error);
    throw error;
  }
}
