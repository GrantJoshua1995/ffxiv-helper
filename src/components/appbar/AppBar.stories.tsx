import React from "react";

import { AppBar, Typography } from "@material-ui/core/";

export default {
  title: "Material App Bar",
};

export const DefaultWithHeader = () => (
  <AppBar position="static">
    <Typography variant="h3">Default App Bar</Typography>
  </AppBar>
);
