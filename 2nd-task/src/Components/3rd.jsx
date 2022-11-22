import React from "react";
import { Box, useTheme, Radio, Button, Grid } from "@mui/material";
import Pic1 from "../imges/Group44.png";
import pic2 from "../imges/Group271.png";
import { Container, width } from "@mui/system";

function Third() {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          background: "#080523",
        }}
      >
        <Container>
          <Grid container spacing={3}>
            <Grid xs={12} md={4}>
              {/* <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItem: "center",
                }}
              >
                <Box
                  color={theme.palette.secondary.contrastText}
                  sx={{
                    backgroundImage: `url(${Pic1})`,
                    backgroundRepeat: "no-repeat",
                    
                  }}
                > */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "22px",
                    lineHeight: "26px",
                    width: "138px",
                    height: "28px",
                    left: "198px",
                    paddingTop: "30px",
                  }}
                >
                  Stake tokens
                </Box>

                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        width: "90px",
                        height: "18px",
                        left: "198px",
                        top: "1371px",
                        fontFamily: "'Lato'",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "15px",
                        lineHeight: "18px",
                      }}
                    >
                      Stake amount
                    </Box>
                    <Box
                      sx={{
                        // width: "489px",
                        // height: "638px",
                        // left: "171px",
                        border: "1px solid  white",
                        width: "130px",
                        px: "27px",
                        // top: "1283px",
                        // // background: "url(image.png)",
                        // boxShadow: "2px 1px 23px 1px #0164F6",
                      }}
                    >
                      mino{" "}
                    </Box>
                  </Box>

                  <Box display="flex" justifyContent="space-between" py="30px">
                    <Box border="1px solid white" borderRadius="3px" px="20px">
                      25%
                    </Box>
                    <Box border="1px solid white" borderRadius="3px" px="20px">
                      50%
                    </Box>
                    <Box border="1px solid white" borderRadius="3px" px="20px">
                      75%
                    </Box>
                    <Box border="1px solid white" borderRadius="3px" px="20px">
                      100%
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: "83px",
                    height: "18px",
                    left: "211px",
                    top: "1490px",
                    fontFamily: "'Lato'",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "18px",
                  }}
                >
                  Stake period
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    border: "1px solid #D8D8D8",
                    borderRadius: "3px",
                    // marginTop: "15px",
                    // width: "300px",
                    alignItems: "center",
                    paddingRight: "10px",
                    height: "40px",
                    // margin:"auto"
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Radio
                      // checked={selectedValue === 'a'}
                      // onChange={handleChange}
                      value="a"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                    />{" "}
                  </Box>
                  <Box>APY 31%</Box>
                  <Box>4 months</Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    border: "1px solid #D8D8D8",
                    borderRadius: "3px",
                    marginTop: "15px",
                    // width: "300px",
                    height: "40px",
                    // margin:"auto"
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Radio
                      // checked={selectedValue === 'a'}
                      // onChange={handleChange}
                      value="a"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                    />{" "}
                  </Box>
                  <Box>APY 1%</Box>
                  <Box>4 months</Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    border: "1px solid #D8D8D8",
                    borderRadius: "3px",
                    marginTop: "15px",
                    // width: "300px",
                    height: "40px",
                    // margin:"auto"
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Radio
                      // checked={selectedValue === 'a'}
                      // onChange={handleChange}
                      value="a"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                    />{" "}
                  </Box>
                  <Box>APY 31%</Box>
                  <Box>4 months</Box>
                </Box>
                <Box sx={{ text: "center", marginTop: "10px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima illum explicabo doloribus ipsum? Nisi voluptas expedita
                  numquam rem est? Unde quidem suscipit libero natus ex eligendi
                  rerum, dolorem voluptas!
                </Box>

                <Box>
                  <img
                    src={pic2}
                    alt=""
                    width="30%"
                    height=""
                    style={{
                      // position: "absolute",
                      width: "50%",
                      maxWidth: "780.37px",
                      // height: "auto",
                      // right: "50px",
                      // bottom: "1px",
                      opacity: "0.3",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                  alignItems="center"
                  textAlign="center"
                  justifyContent="center"
                >
                  <Box>
                    <Box
                      color={theme.palette.secondary.contrastText}
                      sx={{
                        fontFamily: "'Lato'",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "25px",
                        lineHeight: "30px",
                        color: "#FFFFFF",
                      }}
                    >
                      Your balance
                    </Box>
                    <Box
                      color={theme.palette.secondary.contrastText}
                      sx={{
                        fontFamily: "'Lato'",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "15px",
                        lineHeight: "18px",
                        color: "#FFFFFF",
                      }}
                    >
                      Please connect to wallet and switch to Binance Smart Chain
                      network
                    </Box>
                    <Button
                      variant="outlined"
                      sx={{
                        color: "white",
                        border: "1px solid white",
                        px: "30px",
                        // width:"50%"
                        mt: "10px",
                      }}
                    >
                      Connect Wallet
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Third;
