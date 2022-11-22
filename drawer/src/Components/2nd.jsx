import React from "react";
import { Box, Grid } from "@mui/material";
import Pic1 from "../imges/Group3.png";
import { Container } from "@mui/system";

function Second() {
  return (
    <Grid
      Container
      sx={{
        background: "#2B8BF2",
      }}
    >
        <Container>
      <Grid  container spacing={2} alignItems="center"
      // sx={{ display: "flex", justifyContent: "space-between" ,alignItems:"center" }}
      >
        <Grid item xs={12} sm={6} md={4}alignItems="center" >
          <img src={Pic1} alt="" width={"80%"} height=""  />
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={{ color: "white",
        
    
    }}>
          0x23125108bc4c63E4677b2E253Fa4983298b
        </Grid>
        <Box sx={{ color: "white" }}>
          <Grid item xs={12} sm={6} md={3} textAlign="center"
            variant="text"
            sx={{
              cursor: "pointer",
              px: "10px",
              py: "5px",
              "&:hover": {
                // background: "white",
                color: "white",
              },

            }}
            color="white"
          >
            Copy Address
          </Grid>
        </Box>
      </Grid>
      </Container>
    </Grid>
  );
}

export default Second;
