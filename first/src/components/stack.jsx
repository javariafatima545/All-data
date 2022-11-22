import React from "react";
import { Box, Stack, Divider, Paper } from "@mui/material";

import { styled } from "@mui/material/styles";

const Item = styled(Paper)({
  backgroundColor: "green",
  padding: "20px",
  textAlign: "center",
  color: "red",
});

function StackComponent() {
  return (
    <Box sx={{ width: "250px" }}>
      <Stack
        spscing={2}
        direction="row"
        divider={<Divider orientation=" vertical" />}
      >
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
      </Stack>
    </Box>
  );
}

export default StackComponent;
