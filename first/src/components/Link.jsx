import { Link, Box } from "@mui/material";
import React from "react";

function Link1() {
  return (
    <Box my={4}>
      <Link href="https://www.google.com/" target="_blank" padding={2}>
        link
      </Link>
      <Link href="#" underline="hover" px={2} m={3}>
        {" "}
        abc{" "}
      </Link>
      <Link href="#" underline="always">
        aaaaaaaaa
      </Link>
    </Box>
  );
}

export default Link1;
