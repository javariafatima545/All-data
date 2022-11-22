import React from "react";
import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import { Box, Stack } from "@mui/material";

const Item = styled(Paper)({
  backgroundColor: "greenyellow",
  margin: "2px",
  textAlign: "center",
  color: "red",
  width: "50px",
});
function Responsive() {
  return (
    <Box>
      <Stack
        direction="row-reverse"
        // direction={{ xs: "column", sm: "row" }}
        // spacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
      </Stack>
      <Box border="2px  solid  red" margin={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sint
        nostrum magni? Nisi, rem reprehenderit.
      </Box>

      <Box
        borderRadius="100px"
        border="2px solid  green"
        margin={2}
        padding={5}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rerum modi
        ea ipsa autem distinctio.
      </Box>
    </Box>
  );
}

export default Responsive;
