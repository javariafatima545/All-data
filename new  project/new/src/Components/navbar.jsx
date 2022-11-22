import * as React from "react";
import { Box } from "@mui/material";
// import { Stack } from "@mui/system";
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
// import ClearAllIcon from "@mui/icons-material/ClearAll";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import SickIcon from "@mui/icons-material/Sick";

import { Container, Grid, Hidden } from "@mui/material";
// import Pic2 from "../imges/Group9.png";
// import { borderBottom } from "@mui/system";
import Pic2 from "../imges/Frame.png";
import Pic3 from "../imges/64.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { HashLink } from "react-router-hash-link";
// import ScrollToTop from "react-scroll-to-top";

export default function Navbar1() {
  const matches = useMediaQuery("(max-width:750px)");
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
        {[
          <Box
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "21px",
              color: "#FFFFFF",
              "&:hover": { cursor: "pointer" },
              height: { xs: "70px" },

              background: "linear-gradient(225deg, #001F76 0%, #00E3AE 100%)",
              borderRadius: "90px",
              textTransform: "uppercase",
              // width:"45%",
              // width:" 157.14px",
              textAlign: "center",
              // PY:"30px",
              // color:"white",
              width: { xs: "45%", sm: "45%" },

              alignItems: "center",
            }}
          >
            {" "}
            <Button varient="text" sx={{ color: "white", py: "12px" }}>
              Open App
            </Button>
          </Box>,
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Grid container sx={{ backgroundColor: "Black", height: "100vh" }}>
      <Container>
        <Box
          sx={{
            justifyContent: "space-between",
            // alignItems: "center",
            display: "flex",
          }}
        >
          <Grid item xs={12} md={4} py="20px">
            <img
              src={Pic2}
              height={"100%"}
              alt=""
              width={matches ? "40%" : "70%"}
            />
          </Grid>
          <Grid
            item
            md={5}
            xs={12}
            sx={{
              display: { md: "flex", sm: "none", xs: "none" },
              justifyContent: "space-between",
              py: "20px",
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
                "&:hover": { cursor: "pointer" },
                height: "50px",
                left: "1268px",
                top: "95px",
                background: "linear-gradient(225deg, #001F76 0%, #00E3AE 100%)",
                borderRadius: "100%",
                width: "50PX",
                textAlign: "center",
                PY: "30px",

                alignItems: "center",
              }}
            >
              <HashLink smooth to="/#home">
                <TwitterIcon sx={{ py: "10px" }} />
              </HashLink>
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
                "&:hover": { cursor: "pointer" },
                height: "50px",
                left: "1268px",
                top: "95px",
                background: "linear-gradient(225deg, #001F76 0%, #00E3AE 100%)",
                borderRadius: "100%",
                width: "50PX",
                textAlign: "center",
                PY: "30px",

                alignItems: "center",
              }}
            >
              {" "}
              <HashLink smooth to="/#third">
                <TelegramIcon sx={{ py: "10px" }} />
              </HashLink>
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
                "&:hover": { cursor: "pointer" },
                height: "50px",
                left: "1268px",
                top: "95px",
                background: "linear-gradient(225deg, #001F76 0%, #00E3AE 100%)",
                borderRadius: "100%",
                width: "50PX",
                textAlign: "center",
                PY: "30px",

                alignItems: "center",
              }}
            >
              {" "}
              {/* <SickIcon sx={{ py: "10px" }} /> */}
              <HashLink smooth to="/#four">
                <SickIcon sx={{ py: "10px" }} />
              </HashLink>
            </Box>
            <Box
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#FFFFFF",
                "&:hover": { cursor: "pointer" },
                height: "50px",

                background: "linear-gradient(225deg, #001F76 0%, #00E3AE 100%)",
                borderRadius: "90px",
                textTransform: "uppercase",
                width: "40%",
                // width:" 157.14px",
                textAlign: "center",
                // PY:"30px",
                // color:"white",

                alignItems: "center",
              }}
            >
              {" "}
              <Button
                varient="text"
                sx={{
                  color: "white",
                  py: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "21px",
                  width: "100%",
                }}
              >
                Open App
              </Button>
            </Box>
          </Grid>
          <Hidden mdUp>
            <div>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button
                    sx={{
                      Color:
                        "linear-gradient(225deg, #001F76 0%, #00E3AE 100%)",
                      py: "20px",
                    }}
                    onClick={toggleDrawer(anchor, true)}
                  >
                    {<ClearAllIcon />}
                  </Button>
                  <Drawer
                    sx={{ background: "black !important" }}
                    c
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

        <Grid
          py={3}
          sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          <Grid
            item
            md={8}
            xs={12}
            sm={6}
            py={3}
            sx={{
              color: "white",
              //  width: "938px",
              height: "90px",
              // left: "195px",
              // top: "443px",
              fontFamily: "'Poppins'",
              fontStyle: "normal",
              fontWeight: "300",
              fontSize: "25px",
              lineHeight: "45px",
              py: "30px",
              // alignItems:"center",
            }}
          >
            A node protocol offering an unbeatable yield potential with it’s
            returns from DeFi protocols across many chains.
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            sm={6}
            py={3}
            sx={{ alignItems: "center", textAlign: "center" }}
          >
            <img src={Pic3} alt=" " width={"60%"} />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
