import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { useAuthStore } from "@/store";

type Props = {
  toggleDrawer: (open: boolean) => void;
};

export const NavApp: React.FC<Props> = ({ toggleDrawer }) => {
  const username = useAuthStore((state) => state.username);

  const onToggleDrawer = () => {
    toggleDrawer(true);
  };

  return (
    <AppBar position="absolute">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onToggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 2, paddingLeft: "10px" }}>
          {username}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
