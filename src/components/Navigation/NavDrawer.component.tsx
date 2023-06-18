import { Drawer, Divider } from "@mui/material";

import { NavLogout, NavList } from "@/components";
import { useAuthStore } from "@/store";
import imgUser from "@/utils/img-user.png";

type Props = {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
};

export const NavDrawer: React.FC<Props> = ({ open, toggleDrawer }) => {
  const username = useAuthStore((state) => state.username);

  const onToggleDrawer = () => {
    toggleDrawer(true);
  };

  return (
    <Drawer anchor="left" open={open} onClose={onToggleDrawer}>
      <div
        role="presentation"
        onClick={onToggleDrawer}
        onKeyDown={onToggleDrawer}
      >
        <div className="navdrawer-img">
          <img src={imgUser} alt="Usuario" width={100} />
          <p className="navdrawer-username">{username}</p>
        </div>
        <Divider />
        <NavList />
        <NavLogout />
      </div>
    </Drawer>
  );
};
