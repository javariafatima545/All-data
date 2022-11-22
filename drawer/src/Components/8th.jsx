import React from "react";
import { Grid, Box } from "@mui/material";
import { Container } from "@mui/system";
import Pic2 from "../imges/Groupp2.png";
import Pic3 from "../imges/img1.png";
import Pic4 from "../imges/img2.png";
import Pic5 from "../imges/img3.png";
import Pic6 from "../imges/img4.png";
import Pic7 from "../imges/img5.png";
import Pic8 from "../imges/img6.png";

function Eight() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Pic2})`,
        backgroundSize: "cover",
        backgroundPosition: "fixed",
        height: "100%",

        width: "100%",
      }}
    >
      <Container maxWidth="md">
        <Grid container >
          <Grid item xs={12} sm={6} md={4} py={3} alignItems="center" >
            <img src={Pic3} alt=""width={"25%"}   />
          </Grid>
          <Grid item xs={12} sm={6}  md={4} py={3} alignItems="center" >
            <img src={Pic4} alt="" width={"25%"} />
          </Grid>
          <Grid item xs={12} sm={6}  md={4} py={3}>
            <img src={Pic5} alt="" width={"25%"} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}  py={3}>
            <img src={Pic6} alt="" width={"25%"} />
          </Grid>
          <Grid item xs={12} sm={6}  md={4} py={3}>
            <img src={Pic7} alt="" width={"25%"} />
          </Grid>
          <Grid item xs={12} sm={6}  md={4} py={3}>
            <img src={Pic8} alt="" width={"25%"} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Eight;
