import React from "react";
import { Box, Container, Grid, Radio, useTheme, Button } from "@mui/material";
import Pic1 from "../imges/Group44.png";

function CardsComponent() {
  const theme = useTheme();
  return (
    <Box bgcolor="#080523">
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                backgroundImage: `url(${Pic1})`,
                backgroundRepeat: "no-repeat",
                height: "100vh",
                marginTop: "20px",
              }}

              // bgcolor={"red"} height="300px"
            >
              <Container>
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
                  color={theme.palette.secondary.contrastText}
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
                      color={theme.palette.secondary.contrastText}
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
                        borderRadius:"3px"
                        // top: "1283px",
                        // // background: "url(image.png)",
                        // boxShadow: "2px 1px 23px 1px #0164F6",
                      }}
                      color={theme.palette.secondary.contrastText}
                    >
                      mino{" "}
                    </Box>
                  </Box>

                  <Box display="flex" justifyContent="space-between" py="30px" alignItems="center">
                    <Box
                      border="1px solid white"
                      borderRadius="3px"
                      px="20px"
                      py="5px"
                      // height= "40px"
                      color={theme.palette.secondary.contrastText}
                    >
                      25%
                    </Box>
                    <Box
                      border="1px solid white"
                      borderRadius="3px"
                      px="20px"
                      py="5px"
                      color={theme.palette.secondary.contrastText}
                    >
                      50%
                    </Box>
                    <Box
                      border="1px solid white"
                      borderRadius="3px"
                      px="20px"
                      py="5px"
                      color={theme.palette.secondary.contrastText}
                    >
                      75%
                    </Box>
                    <Box
                      border="1px solid white"
                      borderRadius="3px"
                      px="20px"
                      py="5px"
                      color={theme.palette.secondary.contrastText}
                    >
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
                  color={theme.palette.secondary.contrastText}
                >
                  Stake period
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
                    paddingRight: "10px",
                    // alignItems:"center"

                    // margin:"auto"
                  }}
                  alignItems="center"
                  color={theme.palette.secondary.contrastText}
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
                      bgcolor="blue"
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
                    alignItems: "center",
                    paddingRight: "10px",
                    height: "40px",
                    // margin:"auto"
                  }}
                  alignItems="center"
                  color={theme.palette.secondary.contrastText}
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
                      bgcolor="blue"
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
                    paddingRight: "10px",
                    // textAlign:"center",
                    height: "40px",
                    // margin:"auto"
                  }}
                  alignItems="center"
                  color={theme.palette.secondary.contrastText}
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
                      bgcolor="blue"
                      inputProps={{ "aria-label": "A" }}
                    />{" "}
                  </Box>
                  <Box>APY 31%</Box>
                  <Box>4 months</Box>
                </Box>
                <Box
                  sx={{
                    pt: "20px",
                  }}
                  color={theme.palette.secondary.contrastText}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident beatae possimus mollitia debitis minus recusandae
                  maxime dicta incidunt suscipit eaque!
                </Box>
                {/* </Container> */}
              </Container>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ mt: "20px", paddingTop: "50px" }}>
              <Box>
                <Box sx={{ color: "white" }}>Your balance</Box>
                <Box sx={{ color: "white" }}>
                  Please connect to wallet and switch to Binance Smart Chain
                  network
                </Box>

                <Button
                  varient="outlined"
                  sx={{
                    color: "white",
                    border: "1px solid white",
                    py: "10px",
                    px: "170px",
                    mt: "50px",
                    
                  }}
                >
                  Connect Wallet
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CardsComponent;
