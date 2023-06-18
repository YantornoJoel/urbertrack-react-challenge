import React from 'react';
import Swal, { SweetAlertIcon }  from 'sweetalert2';

type Props= {
    title: string,
    text: string,
    icon: SweetAlertIcon
}

export const SwalAlert: React.FC<Props> = ({title, text, icon}) => {

    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        timer: 3500
    })
    return null;
}