import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";

function First() {
  return (
    <Box id="home" sx={{ background: "white" }}>
      <Container>
        <Grid
          container
          spacing={2}
          my={6}
          sx={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item sm={6} md={3} xs={12}>
            <Box
              sx={{
                backgroundImage:
                  "linear-gradient(225deg, #001F76 0%, #00E3AE 100%) ",

                p: "10px",
                borderRadius: "30px",
              }}
            >
              <Box
                sx={{
                  background:
                    "linear-gradient(35deg, #001F76 0%, #00E3AE 100%)",
                  borderRadius: "30px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "'LEMON MILK'",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "25px",
                    lineHeight: "31px",
                    textAlign: "center",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                    py: "20px",
                  }}
                >
                  {" "}
                  Stable passive income
                </Typography>
                <Box
                  sx={{
                    color: "white",
                    textAlign: "center",
                    py: "20px",
                    px: "4px",
                  }}
                >
                  Our nodes offer from 0.1% to 1% daily ROI depending on initial
                  investment. It efficiently aggregates return from
                  protocol-owned liquidity with returns from DeFi protocols
                  across many chains to allocate rewards and yield holders.
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item sm={6} md={3} xs={12}>
            <Box
              sx={{
                backgroundImage:
                  "linear-gradient(225deg, #001F76 0%, #00E3AE 100%) ",

                p: "10px",
                borderRadius: "30px",
              }}
            >
              <Box
                sx={{
                  background:
                    "linear-gradient(35deg, #001F76 0%, #00E3AE 100%)",
                  borderRadius: "30px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "'LEMON MILK'",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "25px",
                    lineHeight: "31px",
                    textAlign: "center",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                    py: "20px",
                  }}
                >
                  {" "}
                  Stable passive income
                </Typography>
                <Box
                  sx={{
                    color: "white",
                    textAlign: "center",
                    py: "20px",
                    px: "4px",
                  }}
                >
                  Our nodes offer from 0.1% to 1% daily ROI depending on initial
                  investment. It efficiently aggregates return from
                  protocol-owned liquidity with returns from DeFi protocols
                  across many chains to allocate rewards and yield holders.
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item sm={6} md={3} xs={12}>
            <Box
              sx={{
                backgroundImage:
                  "linear-gradient(35deg, #001F76 0%, #00E3AE 100%) ",

                p: "10px",
                borderRadius: "30px",
              }}
            >
              <Box
                sx={{
                  background:
                    "linear-gradient(225deg, #001F76 0%, #00E3AE 100%)",

                  borderRadius: "30px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "'LEMON MILK'",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "25px",
                    lineHeight: "31px",
                    textAlign: "center",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                    py: "20px",
                  }}
                >
                  {" "}
                  Stable passive income
                </Typography>
                <Box
                  sx={{
                    color: "white",
                    textAlign: "center",
                    py: "20px",
                    px: "4px",
                  }}
                >
                  Our nodes offer from 0.1% to 1% daily ROI depending on initial
                  investment. It efficiently aggregates return from
                  protocol-owned liquidity with returns from DeFi protocols
                  across many chains to allocate rewards and yield holders.
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default First;
