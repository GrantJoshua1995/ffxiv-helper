import React from "react";

import { IconButton } from "@material-ui/core/";
import { Menu as MenuIcon } from "@material-ui/icons/";

export default {
  title: "Material Icon Button",
};

export const Menu = () => (
  <IconButton edge="start" color="inherit" aria-label="menu">
    <MenuIcon />
  </IconButton>
);
