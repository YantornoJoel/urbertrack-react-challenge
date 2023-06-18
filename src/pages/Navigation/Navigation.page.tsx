import { useState } from "react";

import { useMediaQuery, useTheme } from "@mui/material";

import { NavApp, NavDrawer, NavMobile } from "@/components";

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {isMobile ? (
        <NavMobile />
      ) : (
        <>
          <NavApp toggleDrawer={toggleDrawer(true)} />
          <NavDrawer open={isOpen} toggleDrawer={toggleDrawer(false)} />
        </>
      )}
    </>
  );
};
