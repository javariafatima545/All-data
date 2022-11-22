import React from "react";
import { Pagination, Stack } from "@mui/material";

function Pagination1() {
  return (
    <Stack Spacing={2}>
      <Pagination count={10} color="secondary" />
      <Pagination count={10} color="primary" />
      <Pagination count={10} disabled />
      <Pagination count ={17} color="standard"/>
      




    </Stack>
  );
}

export default Pagination1;
