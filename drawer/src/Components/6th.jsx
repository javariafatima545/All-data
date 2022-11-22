import React from "react";
import {  Box, Stack } from "@mui/material";
import Pic2 from "../imges/character77.png";
import Pic1 from "../imges/g19.png";

import { Container } from "@mui/system";
// import { Grade } from "@mui/icons-material";

function six() {
  return (
    <Box sx={{ background: "#29282A" }}>
      <Container>
        <Box
          sx={{
            fontFamily: "'Roboto'",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "43px",
            lineHeight: "50px",
            background:
              "linear-gradient(180deg, #FAFAFA 13%, #E7E5E5 80%, #E6DEDE 80%)",
            webkitBackgroundClip: "text",
            webkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            textAlign: "center",
            // m: "auto",
            py: "50px",
          }}
        >
          {" "}
          BUILDING MUSCLES
        </Box>
        <Stack
          py={5}
          width="20%"
          direction={{ xs: "column", sm: "row" }}
          justifyContent={"space-between"}
          color="#fff"
          textAlign={{ xs: "center", sm: "left" }}
          sx={{
            transition: "0.4s ease-in",
            "&:hover": {
              width: "70%",
              "& .content": {
                display: "block",
              },
            },
            background:
              "linear-gradient(180deg, rgba(156, 39, 245, 0.8) 0%, rgba(108, 10, 227, 0.8) 100%)",
            borderRadius: "34px",
            height: "210px",
          }}
        >
          <Box
            className="content"
            sx={{ transition: "0.4s" }}
            display={"none"}
            mt={3}
          >
            <ul>
              <li>Website</li>
            </ul>
            <ul>
              <li>Twitter</li>
            </ul>
            <ul>
              <li>Instagram</li>
            </ul>
            <ul>
              <li>Telegram</li>
            </ul>
          </Box>
          <Box
            className="content"
            sx={{ transition: "0.4s" }}
            display={"none"}
            mt={3}
          >
            <ul>
              <li>Youtube</li>
            </ul>
            <ul>
              <li>Meme development</li>
            </ul>
            <ul>
              <li>Spread awareness</li>
            </ul>
          </Box>

          <Box position="relative">
            {" "}
            <img src={Pic2} style={{ position: "absolute",right:"-80px" }} alt="" />
          </Box>
        </Stack>
        <Stack direction={"row"} alignItems="center">
          <img src={Pic1} alt="" width={"30%"} />
          <Box
            sx={{
              fontFamily: "'Roboto'",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "51px",
              lineHeight: "60px",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            PHASE 1
          </Box>
        </Stack>
        <Stack direction={"row"} alignItems="center">
          <img src={Pic1} alt="" width={"30%"} />
          <Box
            sx={{
              fontFamily: "'Roboto'",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "51px",
              lineHeight: "60px",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            PHASE 2
          </Box>
        </Stack>
        <Stack direction={"row"} alignItems="center">
          <img src={Pic1} alt="" width={"30%"} />
          <Box
            sx={{
              fontFamily: "'Roboto'",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "51px",
              lineHeight: "60px",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            PHASE 3
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default six;
