import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

export const NoFavoriteImage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate("/");
  };

  return (
    <>
      <Typography textAlign="center" marginTop={20}>
        No hay imagenes favoritas, para guardar una imagen debe ir a {""}
        <i
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={handleClick}
        >
          Inicio
        </i>
      </Typography>
    </>
  );
};
