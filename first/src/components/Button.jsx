import React from "react";
import { Button, Stack } from "@mui/material";

function Btn() {
  return (
    <Stack>
      <Button variant="text"> text </Button>
      <Button variant="contained"> contained </Button>
      <Button variant="outline">outline</Button>
    </Stack>
  );
}

export default Btn;
