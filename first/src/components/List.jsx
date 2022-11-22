import React from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
  Box,
  List,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddToHomeScreenIcon from "@mui/icons-material/AddToHomeScreen";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

function Navbar33() {
  return (
    <Box sm={{ width: "100%", maxwidth: 370, backgroundColor: "" }}>
      {/* <nav aria-label="main mail boxfolder"> */}
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="home" />
          </ListItemButton>
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <AddToHomeScreenIcon />
            </ListItemIcon>
            <ListItemText primary="HomeScreen" />
          </ListItemButton>
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <HomeWorkIcon />
            </ListItemIcon>
            <ListItemText primary="HomeWorkIcon" />
          </ListItemButton>
        </ListItem>
        <Divider />
      </List>
      {/* </nav> */}
    </Box>
  );
}

export default Navbar33;
