import React from "react";
import styled from "@emotion/styled";
import { Box, Grid, Paper } from "@mui/material";

const Item = styled(Paper)({
  backgroundColor: "green",
  color: "yellowgreen",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  marginTop: "15px",
  width: "50%",
  height: "100px",
  padding: "22px",
  border: "2px soild black",
});

function Grid1() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={6}
          sm={8}
          md={3}
          my={2}
          py={15}
          sx={{ backgroundColor: "red" }}
        >
          <Item py={3}>33</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Grid1;
