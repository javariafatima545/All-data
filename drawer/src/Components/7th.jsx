import React from "react";

import { Grid, Box, Container } from "@mui/material";
import Pic1 from "../imges/Group155.png";


function Seven() {
  return (
    <Grid conatiner>
      <Grid
        item
        xs={12}
        sm={6}
        textAlign="center"
        py="30px"
        sx={{
          background:
            "linear-gradient(109.93deg, #29282A 0.56%, #4B4B4C 103.1%)",
          opacity: "0.1",
        }}
      >
        <img src={Pic1} width={"50%"} height={"30%"} />
      </Grid>
   
    </Grid>
  );
}

export default Seven;
