import React from "react";
import { Grid, Box } from "@mui/material";
import { Paper } from "@mui/material";
import styled from "@emotion/styled";

const Item = styled(Paper)({
  backgroundColor: "red",
  color: "green",
  padding: "30px",
});

function Rowcolumn() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid item sx={6}>
          <Item>66</Item>
        </Grid>

        <Grid item sx={6}>
          <Item>66</Item>
        </Grid>
        <Grid item sx={6}>
          <Item>66</Item>
        </Grid>
        <Grid item sx={6}>
          <Item>66</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Rowcolumn;
