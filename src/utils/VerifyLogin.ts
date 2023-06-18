import { SwalAlert } from "@/utils";

export const verifyLogin = (username: string, password: string) => {
  if (username.trim().length === 0) {
    SwalAlert({
      title: "Error",
      text: "Por favor, ingrese un nombre de usuario",
      icon: "info",
    });
    return false;
  }

  if (username !== username.toLowerCase()) {
    SwalAlert({
      title: "Advertencia",
      text: "El nombre de usuario debe estar en minúsculas",
      icon: "warning",
    });
    return false;
  }

  const regex = /^[a-z]+$/;
  if (!regex.test(username)) {
    SwalAlert({
      title: "Advertencia",
      text: "El nombre de usuario no debe contener números y/o caracteres especiales",
      icon: "warning",
    });
    return false;
  }

  if (
    password !== `123${username.charAt(0).toUpperCase()}${username.slice(1)}`
  ) {
    SwalAlert({
      title: "Error",
      text: "La contraseña no coincide",
      icon: "error",
    });
    return false;
  }

  return true;
};
