import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import { useAuthStore, useImageStore } from "@/store";

export const NavLogout: React.FC = () => {
  const username = useAuthStore((state) => state.username);
  const logout = useAuthStore((state) => state.logout);
  const cleanImages = useImageStore((state) => state.cleanImages);
  const cleanFavoriteImages = useImageStore(
    (state) => state.cleanFavoriteImages
  );

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    cleanImages();
    cleanFavoriteImages();
    !username && navigate("/login");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Button color="primary" startIcon={<LogoutIcon />} onClick={handleLogout}>
        Cerrar sesión
      </Button>
    </div>
  );
};
