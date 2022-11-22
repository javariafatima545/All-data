import React from "react";
import { Typography, Box, useTheme, Link } from "@mui/material";

function Theme1() {
  const theme = useTheme();
  return (
    <Box>
      <Link href="" target="-blank">
        <Box color={theme.palette.secondary.contrastText}>
          <Typography variant="h4"> hello world</Typography>
        </Box>
      </Link>
    </Box>
  );
}

export default Theme1;
