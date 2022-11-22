import React from "react";
import { Box } from "@mui/material";
// import Pic1 from "../imges/r15.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Container, display } from "@mui/system";

function Teen() {
  return (
    <Box
      sx={{
        height: "60px",
        left: "-40px",
        top: "7743px",
        // background:
        //   "radial-gradient(420.31% 13686.91% at 49.97% 50%, #F6951D 0%, #D514AD 100%) ",
        color: "white",
        background: "radial-gradient(161.31% 13457.9% at 49.97% 50%, rgb(246, 149, 29) 0%, rgb(213, 20, 173) 100%) no-repeat transparent"
      
       
      }}
    >
      {/* <Container> */}
      <Box sx={{  display: "flex",
        justifyContent: "space-between",
        width:"80%",
        margin:"auto",
        alignItems:"center",
        py:"10px"}}>
        <Box>©2021 by EAGLEINU COIN</Box>
        <Box>
          <FacebookIcon />
          <YouTubeIcon />
        </Box>
      {/* </Container> */}
    </Box>
    </Box>
  );
}

export default Teen;
