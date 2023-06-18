import { Link } from "react-router-dom";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ImageIcon from "@mui/icons-material/Image";

export const NavList: React.FC = () => {
  return (
    <List>
      <div className="item-nav">
        <Link to="/" className="item-nav-link">
          <ListItem component="li">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItem>
        </Link>
      </div>
      <div className="item-nav">
        <Link to="/myimg" className="item-nav-link">
          <ListItem component="li">
            <ListItemIcon>
              <ImageIcon />
            </ListItemIcon>
            <ListItemText primary="Mis Imagenes" />
          </ListItem>
        </Link>
      </div>
      <Divider />
    </List>
  );
};
