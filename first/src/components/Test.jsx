import React from "react";
import Pic1 from "../imges/bg-header-desktop.png";
import {
  Box,
  Avatar,
  Typography,
  Button,
  Container,
  Grid,
  Item,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import Pic2 from "../imges/image-computer.png";
import pic3 from "../imges/image-devices.png";
import Pic4 from "../imges/icon-preview.svg";
import Pic5 from "../imges/icon-text.svg";
import Pic6 from "../imges/icon-blacklist.svg";
import Pic7 from "../imges/logo-google.png";
import Pic8 from "../imges/logo-hp.png";
import Pic9 from "../imges/logo-ibm.png";
import Pic10 from "../imges/logo-microsoft.png";
import Pic11 from "../imges/logo-vector-graphics.png";
import Pic12 from "../imges/icon-facebook.svg";
import pic13 from "../imges/icon-instagram.svg";
import pic14 from "../imges/icon-twitter.svg";

function Test1() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${Pic1})`,
          backgroundRepeat: "no-repeat",
          height: "70vh",
          
        }}
      >
        {" "}
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          // textAlign="center"
          // paddingTop="96px"
          height="70vh"
        >
          <Avatar
            sx={{
              bgcolor: deepOrange[500],
            }}
          >
            N
          </Avatar>
        </Box>
        {/* <img src={Pic1} width="100%" height={"300px"} Back /> */}
      </Box>
      <Container>
        <Box display="flex" alignItems="Center" justifyContent="center">
          <Typography variant="h3" paddingTop="50px">
            {" "}
            A history Of everything you copy{" "}
          </Typography>
        </Box>
        <Box
          component={"p"}
          display="flex"
          alignItems="Center"
          justifyContent="center"
          textAlign="center"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore magni
          reprehenderit totam nostrum vero Lorem ipsum dolor sit amet
          consectetur <br />
          adipisicing elit. Assumenda, harum. quibusdam accusamus sapiente sequi
          quis illo inventore aspernatur?
        </Box>
        <Box
          display="flex"
          // justifyContent="center"
          justifyContent="space-around"
          width="36%"
          margin="auto"
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "hsl(171, 66%, 44%)", borderRadius: "50px" }}
          >
            {" "}
            Download for ios
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "hsl(233, 100%, 69%)",
              borderRadius: "50px",
            }}
          >
            {" "}
            Download for mac
          </Button>
        </Box>
        <Box>
          <Box display="flex" alignItems="Center" justifyContent="center">
            <Typography variant="h3" paddingTop="80px">
              {" "}
              Keep Track of your snippets{" "}
            </Typography>
          </Box>
          <Box
            component={"p"}
            display="flex"
            alignItems="Center"
            justifyContent="center"
            textAlign="center"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            magni reprehenderit totam nostrum vero Lorem <br /> ipsum dolor sit
            amet consectetur adipisicing elit. Assumenda, harum. quibusdam
            accusamus sapiente sequi
            <br /> quis illo inventore aspernatur?
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          width="60%"
          margin="auto"
        >
          <Box>
            <img src={Pic2} alt="" width={"400px"} height="300px" />
          </Box>

          <Box sx={{ paddingTop: "30px" }}>
            <Box>
              <Typography variant="h5"> Quick Search</Typography>

              <Box sx={{ color: "gray" }}>Lorem ipsum dolor sit amet.</Box>
              <Box sx={{ color: "gray" }}>Lorem ipsum dolor sit amet.</Box>
            </Box>
            <br />
            <Box>
              <Typography variant="h5"> Quick Search</Typography>

              <Box sx={{ color: "gray" }}>Lorem ipsum dolor sit amet.</Box>
              <Box sx={{ color: "gray" }}>Lorem ipsum dolor sit amet.</Box>
            </Box>
            <br />
            <Box>
              <Typography variant="h5"> Quick Search</Typography>

              <Box sx={{ color: "gray" }}>Lorem ipsum dolor sit amet.</Box>
              <Box sx={{ color: "gray" }}>Lorem ipsum dolor sit amet.</Box>
            </Box>
            <Box />
          </Box>
        </Box>

        <Box display="flex" justifyContent="center">
          <Typography variant="h4" sx={{ paddingTop: "30px" }}>
            Acces Clip board anywhere{" "}
          </Typography>
        </Box>
        <Box textAlign="center" py="30px">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          numquam nesciunt culpa ullam nobis exercitationem.
        </Box>
        <Box textAlign="center" py="30px">
          <img src={pic3} alt="" width={"448px"} height="260px" />
        </Box>
        <Box display="flex" justifyContent="center">
          <Typography variant="h4" sx={{ paddingTop: "30px" }}>
            Supercharge your workflow{" "}
          </Typography>
        </Box>
        <Box textAlign="center" py="30px">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          numquam nesciunt culpa ullam nobis exercitationem.
        </Box>
        <Box display="flex" justifyContent="space-Between" py="15px">
          <Box>
            <Box textAlign="center">
              <img src={Pic4} alt="" width={"30px"} height="20px" />
            </Box>
            <Box py="10px" textAlign="center">
              {" "}
              <b>sneak Previw</b>
            </Box>
            <Box textAlign="center">
              Lorem ipsum dolor sit consectetur adipisicing.
            </Box>
          </Box>
          <Box>
            <Box textAlign="center">
              <img src={Pic5} alt="" width={"30px"} height="20px" />
            </Box>
            <Box py="10px" textAlign="center">
              {" "}
              <b>sneak Previw</b>
            </Box>
            <Box textAlign="center">
              Lorem ipsum dolor sit consectetur adipisicing.
            </Box>
          </Box>
          <Box>
            <Box textAlign="center">
              <img src={Pic6} alt="" width={"30px"} height="20px" />
            </Box>
            <Box py="10px" textAlign="center">
              {" "}
              <b>sneak Previw</b>
            </Box>
            <Box textAlign="">
              Lorem ipsum dolor sit consectetur adipisicing.
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          py="40px"
          color="gray"
        >
          <Box>
            <img src={Pic7} alt="" width={"100px"} height="40px" />
          </Box>
          <Box>
            {" "}
            <img src={Pic8} alt="" width={"100px"} height="40px" />
          </Box>
          <Box>
            {" "}
            <img src={Pic9} alt="" width={"100px"} height="40px" />
          </Box>
          <Box>
            {" "}
            <img src={Pic10} alt="" width={"100px"} height="40px" />
          </Box>
          <Box>
            {" "}
            <img src={Pic11} alt="" width={"100px"} height="40px" />
          </Box>
        </Box>

        <Box display="flex" alignItems="Center" justifyContent="center">
          <Typography variant="h4" paddingTop="50px">
            {" "}
            clipboard for Ios and mac Os{" "}
          </Typography>
        </Box>
        <Box
          component={"p"}
          display="flex"
          alignItems="Center"
          justifyContent="center"
          textAlign="center"
          color="gray"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore magni
          reprehenderit totam nostrum vero Lorem ipsum dolor sit amet
          consectetur <br />
          adipisicing elit. Assumenda, harum. quibusdam accusamus sapiente sequi
          quis illo inventore aspernatur?
        </Box>
        <Box
          display="flex"
          // justifyContent="center"
          justifyContent="space-around"
          width="36%"
          margin="auto"
          py={5}
        >
          <Button
            variant="contained"
            py="15px"
            sx={{ backgroundColor: "hsl(171, 66%, 44%)", borderRadius: "50px" }}
          >
            {" "}
            Download for ios
          </Button>

          <Button
            variant="contained"
            py="15px"
            sx={{
              backgroundColor: "hsl(233, 100%, 69%)",
              borderRadius: "50px",
            }}
          >
            {" "}
            Download for mac
          </Button>
        </Box>
      </Container>

      {/* <Box backgroundColor="gray">
        <Container>
          <Box display="flex">
            <Box py="15px">
              <Avatar
                sx={{
                  bgcolor: deepOrange[500],
                }}
              >
                c
              </Avatar>
            </Box>



            <Grid Container>
              <Box>
                <Box>Faqs</Box>
                <Box>Faqs</Box>
              </Box>
              <Box>
                <Box>Faqs</Box>
                <Box>Faqs</Box>
              </Box>
              <Box>
                <Box>Faqs</Box>
                <Box>Faqs</Box>
              </Box>
            </Grid>
          </Box>
        </Container>
      </Box> */}

      <Box backgroundColor="gray">
        <Container>
          <Grid container>
            <Grid item xs={12} md={2} py="30px">
              <Avatar
                sx={{
                  bgcolor: deepOrange[500],
                }}
              >
                c
              </Avatar>
            </Grid>

            <Grid item xs={12} md={2} sx={{ py: "20px" }}>
              Faqs
              <Grid>home</Grid>
            </Grid>
            <Grid item xs={12} md={2} sx={{ py: "20px" }}>
              contact us
              <Grid>home</Grid>
            </Grid>
            <Grid item xs={12} md={3} sx={{ py: "20px" }}>
              About
            </Grid>
            <Grid item xs={3} md={3} py="20px">
              <img src={Pic12} alt="" />
              <img
                src={pic13}
                alt=""
                style={{ paddingLeft: "5px", paddingRight: "5px" }}
              />
              <img src={pic14} alt="" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Test1;
