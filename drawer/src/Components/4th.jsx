import React from "react";
import { Box, Grid, Typography } from "@mui/material";
// import Pic1 from "../imges/Group19.png";
import Pic33 from "../imges/5%.png";
function Four() {
  return (
    <Box sx={{ background: "#29282A", width: "100%" }}>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          
         
         
          sx={{
            fontFamily: "'Roboto'",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "43px",
            lineHeight: "50px",
            background:
              "linear-gradient(191.64deg, #F6951D 19.3%, #F63087 74.9%)",
            webkitBackgroundClip: "text",
            webkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            textAlign:"center",
          }}
        >
          OUR TOKENOMICS
        </Grid>
      </Grid>

      <Box>
        <Typography
          sx={{
            fontFamily: "'Roboto'",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "30px",
            lineHeight: "42px",
            textAlign: "center",

            color: "#FFFFFF",
            display: "flex",
            justifyContent: "center",
            py: "20px",
          }}
        >
          <Box>
            <img src={Pic33} alt="" />
          </Box>
          of each transaction redistributed to holders
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            fontFamily: "'Roboto'",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "30px",
            lineHeight: "42px",
            textAlign: "center",

            color: "#FFFFFF",
            display: "flex",
            justifyContent: "center",
            py: "20px",
          }}
        >
          <Box>
            <img src={Pic33} alt="" />
          </Box>
          of each transactions added to liquidity
        </Typography>
      </Box>
    </Box>
  );
}

export default Four;
