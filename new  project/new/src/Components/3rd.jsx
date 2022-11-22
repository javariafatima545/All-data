import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import Pic1 from "../imges/eth1.png";
import Pic2 from "../imges/Ellipse9.png";
import Pic3 from "../imges/blue piggy bank to the left.png";
import Pic4 from "../imges/Group.png";

function Third() {
  return (
    <Box
      id="third"
      sx={{ background: "linear-gradient(225deg, #001F76 0%, #00E3AE 100%)" }}
    >
      <Container>
        <Box
          sx={{
            fontFamily: "'LEMON MILK'",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "40px",
            lineHeight: "68px",
            textTransform: "uppercase",
            color: "#F8F8F8",
            textAlign: "center",
            py: "20px",
          }}
        >
          {" "}
          How it works ?
        </Box>

        <Box
          sx={{
            fontFamily: "'Poppins'",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "25px",
            lineHeight: "45px",
            color: "#FFFFFF",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            textAlign: "center",
          }}
        >
          STEP :1
        </Box>
        <Box
          sx={{
            fontFamily: "'Poppins'",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "20px",
            lineHeight: "45px",
            textAlign: "center",
            color: "#FFFFFF",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            // textAlign:"center",
          }}
        >
          {" "}
          Buy at least
          <b> 5 $CON </b>
          tokens
        </Box>
        <Box
          sx={{
            // background: "white",
            textAlign: "center",
            borderRadius: "30px",
            my: "5px",
          }}
        >
          {" "}
          <Button
            variant="contain"
            sx={{
              background: "white",
              "&:hover": { backgroundColor: "white" },

              borderRadius: "30px",
              my: "5px",
            }}
          >
            <Box
              sx={{
                background: "linear-gradient(225deg, #001F76 0%, #00E3AE 100%)",
                backgroundClip: "text",
                Color: "transparent",
                textFillColor: "transparent",
                fontSize: "20px",
                fontFamily: "'Poppins'",
                fontStyle: "normal",
                fontWeight: "700",

                lineHeight: "30px",
                // "&:hover"{color:"white"},

                textTransform: "uppercase",
                // "&:hover": { background: "white"},
              }}
            >
              BUY $CON
            </Box>
          </Button>
        </Box>
        <Box
          sx={{
            fontFamily: "'Poppins'",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "25px",
            lineHeight: "45px",
            color: "#FFFFFF",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            textAlign: "center",
          }}
        >
          STEP :2
        </Box>
        <Box
          sx={{
            fontFamily: "'Poppins'",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "20px",
            lineHeight: "45px",
            textAlign: "center",
            color: "#FFFFFF",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            // textAlign:"center",
          }}
        >
          {" "}
          Create your Node in exchange of your tokens
        </Box>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: "center", py: "30px" }}
        >
          <Grid item md={3} sm={6} xs={12}>
            <Box
              sx={{
                background: "linear-gradient(225deg, #001F76 0%, #00E3AE 100%)",
                p: "4px",
                borderRadius: "30px",
                border: "transparent",
              }}
            >
              <Box
                sx={{
                  background: "white",
                  py: "20px",

                  borderImage:
                    "linear-gradient(225deg, #001F76 0%, #00E3AE 100%) 1",
                  border: "4px solid transparent",
                  borderRadius: "30px",
                  // color: "rgba(8, 16, 22, 0.7)",

                  // borderImage :
                  //   "linear-gradient(var(--color-bg), var(--color-bg)) padding-box,\r\n    linear-gradient(to right, darkblue, darkorchid) border-box",
                  // borderRadius: "50em",
                  // border: "4px solid transparent",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <img src={Pic1} alt="" width="30%" />
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  {" "}
                  <img src={Pic2} alt="" width="25%" />
                </Box>
                <Box
                  sx={{
                    fontFamily: "'LEMON MILK'",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "30px",
                    lineHeight: "41px",
                    textAlign: "center",
                    color: "rgba(8, 16, 22, 0.7)",
                    //   py:"10px",
                  }}
                >
                  Ashton
                </Box>
                <Box
                  sx={{
                    fontFamily: "'Poppins'",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "25px",
                    lineHeight: "38px",
                    textAlign: "center",
                    color: "rgba(8, 16, 22, 0.7)",
                    py: "10px",
                  }}
                >
                  15 $CON
                </Box>
                <Box
                  sx={{
                    fontFamily: "'Poppins'",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "30px",
                    textAlign: "center",
                    textTransform: "capitalize",
                    color: "rgba(8, 16, 22, 0.7)",
                    py: "10px",
                  }}
                >
                  Earn XX per day
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Box
              sx={{
                background: "linear-gradient(225deg, #001F76 0%, #00E3AE 100%)",
                p: "4px",
                borderRadius: "30px",
                border: "transparent",
              }}
            >
              <Box
                sx={{
                  background: "white",
                  py: "20px",

                  borderImage:
                    "linear-gradient(225deg, #001F76 0%, #00E3AE 100%) 1",
                  border: "4px solid transparent",
                  borderRadius: "30px",
                  // color: "rgba(8, 16, 22, 0.7)",

                  // borderImage :
                  //   "linear-gradient(var(--color-bg), var(--color-bg)) padding-box,\r\n    linear-gradient(to right, darkblue, darkorchid) border-box",
                  // borderRadius: "50em",
                  // border: "4px solid transparent",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <img src={Pic3} alt="" width="30%" />
                </Box>

                <Box sx={{ py: "18px" }}>
                  <Box
                    sx={{
                      fontFamily: "'LEMON MILK'",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "30px",
                      lineHeight: "41px",
                      textAlign: "center",
                      color: "rgba(8, 16, 22, 0.7)",
                      //   py:"10px",
                    }}
                  >
                    Ashton
                  </Box>
                  <Box
                    sx={{
                      fontFamily: "'Poppins'",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "25px",
                      lineHeight: "38px",
                      textAlign: "center",
                      color: "rgba(8, 16, 22, 0.7)",
                      py: "10px",
                    }}
                  >
                    15 $CON
                  </Box>
                  <Box
                    sx={{
                      fontFamily: "'Poppins'",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "20px",
                      lineHeight: "30px",
                      textAlign: "center",
                      textTransform: "capitalize",
                      color: "rgba(8, 16, 22, 0.7)",
                      py: "10px",
                    }}
                  >
                    Earn XX per day
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Box
              sx={{
                background: "linear-gradient(225deg, #001F76 0%, #00E3AE 100%)",
                p: "4px",
                borderRadius: "30px",
                border: "transparent",
              }}
            >
              <Box
                sx={{
                  background: "white",
                  py: "20px",

                  borderImage:
                    "linear-gradient(225deg, #001F76 0%, #00E3AE 100%) 1",
                  border: "4px solid transparent",
                  borderRadius: "30px",
                  // color: "rgba(8, 16, 22, 0.7)",

                  // borderImage :
                  //   "linear-gradient(var(--color-bg), var(--color-bg)) padding-box,\r\n    linear-gradient(to right, darkblue, darkorchid) border-box",
                  // borderRadius: "50em",
                  // border: "4px solid transparent",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <img src={Pic4} alt="" width="30%" />
                </Box>
                <Box sx={{ py: "18px" }}>
                  <Box
                    sx={{
                      fontFamily: "'LEMON MILK'",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "30px",
                      lineHeight: "41px",
                      textAlign: "center",
                      color: "rgba(8, 16, 22, 0.7)",
                      //   py:"10px",
                    }}
                  >
                    Ashton
                  </Box>
                  <Box
                    sx={{
                      fontFamily: "'Poppins'",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "25px",
                      lineHeight: "38px",
                      textAlign: "center",
                      color: "rgba(8, 16, 22, 0.7)",
                      //   py: "10px",
                    }}
                  >
                    15 $CON
                  </Box>
                  <Box
                    sx={{
                      fontFamily: "'Poppins'",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "20px",
                      lineHeight: "30px",
                      textAlign: "center",
                      textTransform: "capitalize",
                      color: "rgba(8, 16, 22, 0.7)",
                      py: "10px",
                    }}
                  >
                    Earn XX per day
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ py: "20px" }}>
          <Box
            sx={{
              textAlign: "Center",
              fontFamily: "'Poppins'",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "30px",
              lineHeight: "45px",
              // textAlign: "center",
              color: "#FFFFFF",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            STEP : 3
          </Box>
          <Box
            sx={{
              textAlign: "Center",
              fontFamily: "'Poppins'",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "25px",
              lineHeight: "45px",
              // textAlign: "center",
              color: "#FFFFFF",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Earn daily rewards from your node & claim your money whenever you
            want
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Third;
