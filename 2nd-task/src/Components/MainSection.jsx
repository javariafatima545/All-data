import React from "react";
import Pic3 from "../imges/ADADAO STAKING.png";
import Pic4 from "../imges/Group 11.png";
import Pic5 from "../imges/gate1.png";
import Pic6 from "../imges/pancake1.png";
import Pic7 from "../imges/Stake $ADADAO tokens to earn more.png";
import { Box, Container, useTheme, Typography, Grid } from "@mui/material";

function MainSection() {
  const theme = useTheme();

  return (
    <Box py={14}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box>
              <img src={Pic3} alt="" width={"300px"} height="60px" />
              <Box
                color={theme.palette.secondary.contrastText}
                // paddingTop="22px"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur,
                {/* <br />] */}
                eos illum dolore error provident cum tempora non amet dolorem
                quidem dolor!
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              py="px"
              border=""
              sx={{
                background:
                  "linear-gradient(180deg, rgba(238, 233, 233, 0.49) 0%, rgba(238, 233, 233, 0.15) 100%)",

                boxShadow: "0px 4px 9px #101023",
                height: "350px",
                // marginBottom:"10px"
                // marginBottom:"30px"
              }}
              borderRadius="21px"
              // width="40%"
              textAlign="center"
            >
              <Typography
                variant="h4"
                // py="30px"
                paddingTop={"10px"}
                fontsize="30px"
                lineheight="36px"
                color="#120A57"
              >
                Token Sales in live{" "}
              </Typography>

              <Box>
                <img src={Pic4} alt="" width={"135.87px"} height="10.73px" />
              </Box>
              <Box
                paddingTop="20px"
                sx={{
                  fontFamily: "'Lato'",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "15px",
                  lineHeight: "18px",
                  color: "#120A57",
                }}
              >
                Buy Adadao tokens
              </Box>
              <Box
                display="flex"
                justifyContent={"center"}
                mx="auto"
                pt="10px"
                flexWrap={"wrap"}
              >
                <Box
                  sx={{
                    background:
                      "linear-gradient(180deg, #0066FF 0%, #120A57 100%)",
                    borderRadius: "2px 15px",
                    width: "182.96px",
                    height: "47.82px",
                    pt: "5px",
                    mx: "10px",
                    // mt:"5px"
                  }}
                >
                  <img src={Pic5} alt="" width={"90.44px"} height="31.19px" />
                </Box>
                <Box
                  sx={{
                    background:
                      "linear-gradient(180deg, #0066FF 0%, #120A57 100%)",
                    borderRadius: "2px 15px",
                    width: "182.96px",
                    height: "47.82px",
                    pt: "5px",
                    // mt:"5px"
                  }}
                >
                  {" "}
                  <img src={Pic6} aly="" width={"90.44px"} height="31.19px" />
                </Box>
              </Box>
              <Box display="flex" justifyContent="center" py="20px">
                <Box>
                  {" "}
                  <img src={Pic4} alt="" width={"135.87px"} height="10.73px" />
                </Box>
                <Box color={theme.palette.secondary.contrastText} px="8px">
                  or
                </Box>
                <Box>
                  {" "}
                  <img src={Pic4} alt="" width={"135.87px"} height="10.73px" />
                </Box>
              </Box>
              <Box
                sx={{
                  background:
                    "linear-gradient(180deg, #0066FF 0%, #120A57 100%)",
                  boxShadow: "-1px 3px 3px rgba(1, 100, 246, 0.29)",
                  borderRadius: "10px",
                  width: "330px",
                  height: "44.15px",
                  margin: "auto",

                  //   left: "1002px",
                }}
              >
                <img src={Pic7} alt="" width="" height="" my="15px" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default MainSection;
