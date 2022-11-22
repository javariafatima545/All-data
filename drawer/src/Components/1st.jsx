import React from "react";
import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import Pic1 from "../imges/EAGLEINU1.png";
import Pic2 from "../imges/abc.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Container } from "@mui/system";

function First() {
  return (
    <Container>
      <Grid container>
        <Grid
          item
          // md={10}
          xs={12}
        >
          <Box
            sx={{
              background: "rgba(196, 196, 196, 0.1)",
              backdropFilter: "blur(37px)",
              borderRadius: "28px",
              my: "50px",
              justifyContent: "center",
              mx: "auto",
              width: "80%",
              py: "10px",
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              textAlign={"center"}
              justifyContent="center"
              sx={{
                fontFamily: "'Roboto'",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "220px",
                //   lineHeight: "258px",
                color: "rgba(34, 33, 35, 0.53)",
                backgroundImage: `url(${Pic1})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
                // width:"600px",
                height: "200px",
              }}
            ></Grid>
            <Stack
              direction={{ xs: "column", sm: "row" }}

              // display={"flex"} flexWrap="wrap"
            >
              <Grid item md={6} sm={6} xs={12}>
                <img src={Pic2} alt="" width={"100%"} />
              </Grid>

              <Grid item md={6} xs={12} sm={6}>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "'Roboto'",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "43px",
                    lineHeight: "50px",
                    color: "white",
                  }}
                >
                  THE KING OF MEMES
                </Typography>
                <p
                  style={{
                    fontFamily: "'Roboto'",
                    fontStyle: "normal",
                    fontWeight: "300",
                    fontSize: "15px",
                    lineHeight: "21px",
                    color: "white",
                  }}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestiae voluptas tempora cum similique ab iste tenetur modi
                  consequatur culpa, temporibus facilis odio a itaque voluptatem
                  in excepturi maiores tempore blanditiis.
                </p>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                    variant="text "
                    sx={{
                      background: "#451BD7",
                      color: "white",
                      alignItems: "center",
                      display: "flex",
                      boxshadow: "0px 0px 11px #9436F4",
                      borderRadius: " 9px",
                      height: "50px",
                      py: "0px",
                      pl: "10px",
                      pr: "0px",

                      "&:hover": { background: "#451BD7", cursor: "pointer" },
                    }}
                  >
                    Buy on Pancake Swap
                    <Box
                      sx={{
                        width: "59px",
                        height: "50px",
                        // left: "913.26px",
                        // top: "604px",
                        background: "#4C90FB",
                        borderRadius: "8px",
                        pt: "3px",
                        ml: "30px",
                      }}
                    >
                      <KeyboardArrowRightIcon />
                    </Box>
                  </Button>

                  <Box></Box>
                </Box>
              </Grid>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default First;
