import React from "react";
import Pic1 from "../imges/footer-ui4.png";
import Pic2 from "../imges/image1.png";
import { Box } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Container } from "@mui/system";

function Footer1() {
  return (
    <Box
      sx={{
        // background: "#080523",
        backgroundImage: `url(${Pic1})`,
        backgroundRepeat: "no-repeat",
        // height: "30vh",
        width: "100%",
      }}
    >
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box py="50px">
            {" "}
            <img src={Pic2} alt="" width="100px" height="50px" />
          </Box>

          <Box py="50px" display="flex" alignItems="center">
            <Box
              sx={{
                width: "37.6px",
                // height: "19.7px",
                left: "1405px",
                // top: "2800.95px",
                color: "white",
              }}
            >
              {" "}
              <TwitterIcon color="white" />{" "}
            </Box>
            <Box  sx={{
                width: "37.6px",
                // height: "19.7px",
                // left: "1405px",
                // top: "2800.95px",
                color: "white",
              }}>
              {" "}
              <LinkedInIcon color="white" />{" "}
            </Box>
            <Box   sx={{
                width: "37.6px",
                // height: "19.7px",
                // left: "1405px",
                // top: "2800.95px",
                color: "white",
              }}>
              <FacebookOutlinedIcon color="white" />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer1;
