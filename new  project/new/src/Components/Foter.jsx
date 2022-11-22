import React from "react";
import { Box, Grid } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import SickIcon from "@mui/icons-material/Sick";
import Pic1 from "../imges/last.png";
import { Container } from "@mui/system";

function Foter() {
  return (
    <Box sx={{ background: "black" }}>
      <Container>
        <Grid
          container
          spacing={5}
          justifyContent="space-between"
          alignItems={"center"}
          py={3}
        >
          <Grid item md={3} sm={6} xs={12} sx={{ color: "white" }}>
            Disclaimer | Dapp | Contact
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <img src={Pic1} alt="" width="50%" />
          </Grid>
          <Grid
            item
            md={3}
            sm={6}
            xs={12}
            sx={{ display: "flex", textAlign: "center" }}
          >
            {" "}
            <Box
              mr={6}
              sx={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#FFFFFF",
                "&:hover": { cursor: "pointer" },
                height: "50px",
                left: "1268px",
                top: "95px",
                background: "linear-gradient(225deg, #001F76 0%, #00E3AE 100%)",
                borderRadius: "100%",
                width: "50PX",
                textAlign: "center",
                PY: "30px",

                alignItems: "center",
              }}
            >
              {" "}
              <TwitterIcon sx={{ py: "10px" }} />
            </Box>
            <Box
              mr={6}
              sx={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#FFFFFF",
                "&:hover": { cursor: "pointer" },
                height: "50px",
                left: "1268px",
                top: "95px",
                background: "linear-gradient(225deg, #001F76 0%, #00E3AE 100%)",
                borderRadius: "100%",
                width: "50PX",
                textAlign: "center",
                PY: "30px",

                alignItems: "center",
              }}
            >
              {" "}
              <TelegramIcon sx={{ py: "10px" }} />
            </Box>
            <Box
              mr={6}
              sx={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#FFFFFF",
                "&:hover": { cursor: "pointer" },
                height: "50px",
                left: "1268px",
                top: "95px",
                background: "linear-gradient(225deg, #001F76 0%, #00E3AE 100%)",
                borderRadius: "100%",
                width: "50PX",
                textAlign: "center",
                PY: "30px",

                alignItems: "center",
              }}
            >
              {" "}
              <SickIcon sx={{ py: "10px" }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Foter;
