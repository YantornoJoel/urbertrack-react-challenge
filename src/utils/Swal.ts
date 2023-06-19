import React from "react";
import Swal, { SweetAlertIcon } from "sweetalert2";

type Props = {
  icon: SweetAlertIcon;
  title: string;
  text?: string;
};

export const SwalAlert: React.FC<Props> = ({ title, text, icon }) => {
  Swal.fire({
    title,
    text,
    icon,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
    timer: 3500,
  });
  return null;
};

export const SwalFavorite: React.FC<Props> = ({ title, icon }) => {
  Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  }).fire({
    icon,
    title,
  });

  return null;
};
