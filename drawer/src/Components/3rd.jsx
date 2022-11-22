import React from "react";
import { Grid, Box, Avatar } from "@mui/material";
import Pic11 from "../imges/144.png";
import Pic12 from "../imges/Group14.png";
import Pic13 from "../imges/144.png";
import Pic14 from "../imges/Group16.png";
import Pic15 from "../imges/Group166.png";

import { Container } from "@mui/system";

function Third() {
  return (
    <Grid
      container
      sx={{
        background: "#29282A",
      }}
    >
      <Grid item>
        <Grid item>
          <Box textAlign="center" py="30px"><img src={Pic15} alt=""width={"50%"} /></Box>
          <Box
            sx={{
              color: "white",

              width: "50%",
              margin: "auto",
            }}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here,
          </Box>
        </Grid>
        <Container>
          <Grid container spacing={3} my={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                p={2}
                sx={{
                  backgroundImage: `url(${Pic11})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  borderRadius: "25px",
                  // width: "100%",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 56, height: 56, mx: "auto" }}
                />
                <Box
                  sx={{
                    color: "white",
                    py: "15px",
                    // alignItems:"center",
                    textAlign: "center",
                    fontFamily: "'Roboto'",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "27px",
                  }}
                >
                  REWARD AND HOLDINGS
                </Box>
                <Box
                  sx={{
                    color: "white",
                    textAlign: "center",
                    py: "10px",
                  }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                  tempore laborum voluptas impedit quasi accusantium numquam?
                  caecati, quidem consequatur saepe quia temporibus eius sit!
                  Facere consequuntur magni laboriosam veritatis dolores?
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                p={2}
                sx={{
                  backgroundImage: `url(${Pic12})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  borderRadius: "25px",
                  // width: "100%",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 56, height: 56, mx: "auto" }}
                />
                <Box
                  sx={{
                    color: "white",
                    py: "15px",
                    // alignItems:"center",
                    textAlign: "center",
                    fontFamily: "'Roboto'",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "27px",
                  }}
                >
                  REWARD AND HOLDINGS
                </Box>
                <Box
                  sx={{
                    color: "white",
                    textAlign: "center",
                    py: "10px",
                  }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                  tempore laborum voluptas impedit quasi accusantium numquam?
                  caecati, quidem consequatur saepe quia temporibus eius sit!
                  Facere consequuntur magni laboriosam veritatis dolores?
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                p={2}
                sx={{
                  backgroundImage: `url(${Pic13})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  borderRadius: "25px",
                  // width: "100%",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 56, height: 56, mx: "auto" }}
                />
                <Box
                  sx={{
                    color: "white",
                    py: "15px",
                    // alignItems:"center",
                    textAlign: "center",
                    fontFamily: "'Roboto'",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "27px",
                  }}
                >
                  REWARD AND HOLDINGS
                </Box>
                <Box
                  sx={{
                    color: "white",
                    textAlign: "center",
                    py: "10px",
                  }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                  tempore laborum voluptas impedit quasi accusantium numquam?
                  caecati, quidem consequatur saepe quia temporibus eius sit!
                  Facere consequuntur magni laboriosam veritatis dolores?
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                p={2}
                sx={{
                  backgroundImage: `url(${Pic14})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  borderRadius: "25px",
                  // width: "100%",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 56, height: 56, mx: "auto" }}
                />
                <Box
                  sx={{
                    color: "white",
                    py: "15px",
                    // alignItems:"center",
                    textAlign: "center",
                    fontFamily: "'Roboto'",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "27px",
                  }}
                >
                  REWARD AND HOLDINGS
                </Box>
                <Box
                  sx={{
                    color: "white",
                    textAlign: "center",
                    py: "10px",
                  }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                  tempore laborum voluptas impedit quasi accusantium numquam?
                  caecati, quidem consequatur saepe quia temporibus eius sit!
                  Facere consequuntur magni laboriosam veritatis dolores?
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}

export default Third;
