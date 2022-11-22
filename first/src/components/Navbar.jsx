import React from "react";

import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbarmenu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar postion="static">
        <Toolbar>
          <IconButton area-label="menu" color="error" sx={{ mr: 3 }}>
            <MenuIcon sx={{ fontSize: "50px" }} />
          </IconButton>

          

          <Typography variant="h2" component="span" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbarmenu;
