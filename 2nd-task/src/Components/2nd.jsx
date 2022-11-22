import React from "react";
import Pic8 from "../imges/lines3.png";
import { Box, useTheme } from "@mui/material";

function Second() {
  const theme = useTheme();
  return (
    <>
    <Box
      sx={{
        background: "#080523",
        // width: " 1600px",
        // height: " 622px",
        // left: "0px",
        py:"30px"
        // top: " 639px",
      }}
    >
      {" "}
      <img src={Pic8} alt="" width="80%" height="" />
      <Box
        color={theme.palette.secondary.contrastText}
        sx={{
          fontFamily: "'Lato'",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "30px",
          lineHeight: "36px",
          textAlign:"center",
        }}
      >
        STAKE TOKENS TO EARN MORE
       
      </Box>
      <Box 
       color={theme.palette.secondary.contrastText}  textAlign="center" py="10px"
      
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident cupiditate corrupti sit commodi sapiente aut id debitis magni.</Box>
    </Box>

    
    </>
  );
}

export default Second;
