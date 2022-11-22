import React from "react";
import { Box, Grid } from "@mui/material";

// import * as React from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { Container } from "@mui/system";

// export default function ControlledAccordions() {

function Four() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box id="four" sx={{ background: "#000000" }}>
      <Box
        sx={{
          textAlign: "center",
          textTransform: "uppercase",
          background: "linear-gradient(225deg, #001F76 0%, #00E3AE 100%)",
          webkitBackgroundClip: "text",
          webkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          fontFamily: "'LEMON MILK'",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "60px",
          lineHeight: "68px",
          py: "30px",
        }}
      >
        faq
      </Box>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item md={8} sm={6} xs={12}>
          {/* <div> */}
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{
              background: "linear-gradient(225deg, #001F76 0%, #00E3AE 100%)",
              my: "5px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              // background="linear-gradient(225deg, #001F76 0%, #00E3AE 100%)"
            >
              <Typography
                sx={{
                  // width: "33%",
                  // flexShrink: 0,

                  fontFamily: "'Poppins'",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "25px",
                  lineHeight: "45px",
                  color: "#F8F8F8",
                }}
              >
                How can I create a node ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "white" }}>
                Here is the distribution, once a node is created : 80% are moved
                to the reward pool, 10% tokens to the liquidity pool (5% tokens
                are converted in BNB) and 10% are moved to research &
                development/growth wallet.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{
              background: "linear-gradient(225deg, #001F76 0%, #00E3AE 100%)",
              my: "5px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography
                sx={{
                  // width: "33%", flexShrink: 0,
                  fontFamily: "'Poppins'",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "25px",
                  lineHeight: "45px",
                  color: "#F8F8F8",
                }}
              >
                When can I claim my rewards ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "white" }}>
                Here is the distribution, once a node is created : 80% are moved
                to the reward pool, 10% tokens to the liquidity pool (5% tokens
                are converted in BNB) and 10% are moved to research &
                development/growth wallet.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{
              background: "linear-gradient(225deg, #001F76 0%, #00E3AE 100%)",
              my: "5px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography
                sx={{
                  fontFamily: "'Poppins'",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "25px",
                  lineHeight: "45px",
                  color: "#F8F8F8",
                }}
              >
                Where do the tokens go when I buy a Node ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "white" }}>
                Here is the distribution, once a node is created : 80% are moved
                to the reward pool, 10% tokens to the liquidity pool (5% tokens
                are converted in BNB) and 10% are moved to research &
                development/growth wallet.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            sx={{
              background: "linear-gradient(225deg, #001F76 0%, #00E3AE 100%)",
              my: "5px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography
                sx={{
                  fontFamily: "'Poppins'",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "24px",
                  lineHeight: "45px",
                  color: "#F8F8F8",
                }}
              >
                Why did you choose Avalanche & not another Blockchain like
                Ethereum ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "white" }}>
                Here is the distribution, once a node is created : 80% are moved
                to the reward pool, 10% tokens to the liquidity pool (5% tokens
                are converted in BNB) and 10% are moved to research &
                development/growth wallet.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* </div> */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Four;
