import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";

import { useAuthStore, useImageStore } from "@/store";
import imgUser from "@/utils/img-user.png";

export const NavMobile = () => {
  const username = useAuthStore((state) => state.username);
  const logout = useAuthStore((state) => state.logout);
  const cleanImages = useImageStore((state) => state.cleanImages);
  const cleanFavoriteImages = useImageStore(
    (state) => state.cleanFavoriteImages
  );

  const navigate = useNavigate();

  const [screenUser, setScreenUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setScreenUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setScreenUser(null);
  };

  const handleLogout = () => {
    logout();
    cleanImages();
    cleanFavoriteImages();
    !username && navigate("/login");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link to="/" className="item-nav-link" style={{ color: "white" }}>
                Inicio
              </Link>
            </Button>

            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link
                to="/myimg"
                className="item-nav-link"
                style={{ color: "white" }}
              >
                Mis imagenes
              </Link>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User" src={imgUser} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={screenUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(screenUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleLogout}>
                <Typography textAlign="center">Cerrar sesión</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
