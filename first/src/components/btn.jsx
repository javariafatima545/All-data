import { Button, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";

function Btnn() {
  return (
    <div>
      {/* <Typography vaiant="h1">heading 1</Typography>
      <Typography vaiant="h3">heading 1</Typography>
      <Typography vaiant="h2">heading 3</Typography>
      <Typography vaiant="h4">heading 4</Typography>
      <Typography vaiant="h5">heading 5</Typography>

      <Typography variant="subtitle1"> sub title 1</Typography>

      <Typography variant="subtitle2"> sub title 2 </Typography>

      <Typography variant="body1">Lorem ipsum dolor sit.</Typography>
      <Typography vatiant="body2"> Lorem ipsum dolor sit amet.</Typography>
      <Typography variant="h1" component="h1"></Typography>

      <Typography variant="h1">headind h1 </Typography>
      <Typography variant="h2">headind h2 </Typography>
      <Typography variant="h3">headind h3 </Typography>
      <Typography variant="subtitle1 "> sub title 1</Typography>
      <Typography variant="subtile2"> sub title 2</Typography> */}
      <Button variant="contained"> contained</Button>
      <Button variant="contained"> contained</Button>
      <Button variant="outline"> outline </Button>
      <Button Variant=" contained" bgcolor="primary">
        {" "}
        primary11{" "}
      </Button>
      <Button Variant="contained" color="secondary">
        {" "}
        primary{" "}
      </Button>
      <Button Variant="contained" bgcolor="secondary" color="error">
        {" "}
        primary{" "}
      </Button>
      <Button Variant="contained" color="warning">
        {" "}
        primary{" "}
      </Button>
      <Button Variant="contained" color="info">
        primary{" "}
      </Button>
      <Button Variant=" contained" color="success">
        {" "}
        primary{" "}
      </Button>
      <Button variant="contained" color="success">
        11
      </Button>
      <Button variant="contained" color="error">
        11
      </Button>
      <Button variant="contained" color="error" size="small">
        11
      </Button>
      <Button variant="contained" color="error" size="medium">
        11
      </Button>
      <Button variant="contained" color="error" size="large">
        11111<ArrowForwardIcon />
      </Button>
    
    </div>
  );
}

export default Btnn;
// export default ArrowForwardIcon ;
