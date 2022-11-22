import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ClearAllIcon from "@mui/icons-material/ClearAll";

import { Container, Grid, Hidden } from "@mui/material";
import Pic2 from "../imges/Group9.png";
// import { borderBottom } from "@mui/system";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      color="rgb(246, 149, 29);"
      borderBottom={"2px solid"}
      style={{ backgroundColor: "black" }}
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[" Burn & Rewards", "Tokenomics", "Roadmap", "Charity", "NFT"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Grid container>
      <Container>
        <Box
          sx={{
            //   justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Grid item xs={12} md={4} py="10px">
            <img src={Pic2} width="70px" height={"100px"} alt="" />
          </Grid>
          <Grid
            item
            md={9}
            xs={12}
            sx={{
              display: { md: "flex", sm: "none" ,xs:"none" },
              // justifyContent:"space-around",
            }}
          >
            <Box
              mr={6}
              sx={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#FFFFFF",
                "&:hover": { borderBottom: "2px solid red" },
              }}
            >
              {" "}
              Burn & Rewards
            </Box>
            <Box
              mr={6}
              sx={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",

                color: "#FFFFFF",
                "&:hover": { borderBottom: "2px solid red" },
              }}
            >
              {" "}
              Tokenomics
            </Box>
            <Box
              mr={6}
              sx={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#FFFFFF",
                "&:hover": { borderBottom: "2px solid red" },
              }}
            >
              {" "}
              Roadmap
            </Box>
            <Box
              mr={6}
              sx={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#FFFFFF",
                "&:hover": { borderBottom: "2px solid red" },
              }}
            >
              {" "}
              Charity
            </Box>
            <Box
              mr={6}
              sx={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#FFFFFF",
                "&:hover": { borderBottom: "2px solid red" },
              }}
            >
              {" "}
              NFT
            </Box>
          </Grid>
          <Hidden mdUp>
            <div >
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button
                    sx={{ color: "rgb(246, 149, 29)" }}
                    onClick={toggleDrawer(anchor, true)}
                  >
                    {<ClearAllIcon />}
                  </Button>
                  <Drawer
                   sx={{background:"black !important"}}
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </div>
          </Hidden>
        </Box>
      </Container>
    </Grid>
  );
}
