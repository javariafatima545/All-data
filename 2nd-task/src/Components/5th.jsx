import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Pic1 from "../imges/Group271.png";
import { Container, Item } from "@mui/system";

function Five() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: "#080523",
        backgroundImage: `url(${Pic1})`,
        backgroundRepeat: "no-repeat",
        height: "70vh",
      }}
    >
      <Box alignItem="center">
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Lato'",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "30px",
            lineHeight: "36px",
            textAlign: "center",
            py:"30px"
          }}
          color={theme.palette.secondary.contrastText}
        >
          FREQUENTLY ASKED QUESTIONS
        </Typography>
        <Box mt="20px">
          <Container>
            {/* <Grid conatiner> */}
            <Grid container spacing={5}>
              <Grid item xs={12} md={4} p="20px">
                <Box
                  sx={{
                    border: "1px solid #CFCCCC",
                    boxShadow: "0px -1px 11px 1px rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <Box>
                    <Accordion
                      sx={{
                        "& .MuiAccordionSummary-expandIconWrapper": {
                          color: "#fff",
                        },
                      }}
                    >
                      <AccordionSummary
                        sx={{ background: "#080523", color: "#fff" }}
                        expandIcon={<ExpandMoreIcon color="#fff" />}
                        color="#fff"
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>What is stacking </Typography>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{ background: "#080523", color: "white" }}
                      >
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Box></Box>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={4} p="20px">
                <Box
                  sx={{
                    border: "1px solid #CFCCCC",
                    boxShadow: "0px -1px 11px 1px rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <Box>
                    <Accordion
                      sx={{
                        "& .MuiAccordionSummary-expandIconWrapper": {
                          color: "#fff",
                        },
                      }}
                    >
                      <AccordionSummary
                        sx={{ background: "#080523", color: "#fff" }}
                        expandIcon={<ExpandMoreIcon color="#fff" />}
                        color="#fff"
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>
                          2 . Where can I stake my Adadao Tokens (ADADAO)?
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{ background: "#080523", color: "white" }}
                      >
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Box></Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={4} p="20px">
                <Box
                  sx={{
                    border: "1px solid #CFCCCC",
                    boxShadow: "0px -1px 11px 1px rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <Box>
                    <Accordion
                      sx={{
                        "& .MuiAccordionSummary-expandIconWrapper": {
                          color: "#fff",
                        },
                      }}
                    >
                      <AccordionSummary
                        sx={{ background: "#080523", color: "#fff" }}
                        expandIcon={<ExpandMoreIcon color="#fff" />}
                        color="#fff"
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>
                          3 . Where will I get my rewards? (Wallet)
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{ background: "#080523", color: "white" }}
                      >
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Box></Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={4} p="20px">
                <Box
                  sx={{
                    border: "1px solid #CFCCCC",
                    boxShadow: "0px -1px 11px 1px rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <Box>
                    <Accordion
                      sx={{
                        "& .MuiAccordionSummary-expandIconWrapper": {
                          color: "#fff",
                        },
                      }}
                    >
                      <AccordionSummary
                        sx={{ background: "#080523", color: "#fff" }}
                        expandIcon={<ExpandMoreIcon color="#fff" />}
                        color="#fff"
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>
                          4 .When will I receive my staking rewards?
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{ background: "#080523", color: "white" }}
                      >
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Box></Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={4} p="20px">
                <Box
                  sx={{
                    border: "1px solid #CFCCCC",
                    boxShadow: "0px -1px 11px 1px rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <Box>
                    <Accordion
                      sx={{
                        "& .MuiAccordionSummary-expandIconWrapper": {
                          color: "#fff",
                        },
                      }}
                    >
                      <AccordionSummary
                        sx={{ background: "#080523", color: "#fff" }}
                        expandIcon={<ExpandMoreIcon color="#fff" />}
                        color="#fff"
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>
                          5 . How does staking work? (ADADAO)?
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{ background: "#080523", color: "white" }}
                      >
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Box></Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={4} p="20px">
                <Box
                  sx={{
                    border: "1px solid #CFCCCC",
                    boxShadow: "0px -1px 11px 1px rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <Box>
                    <Accordion
                      sx={{
                        "& .MuiAccordionSummary-expandIconWrapper": {
                          color: "#fff",
                        },
                      }}
                    >
                      <AccordionSummary
                        sx={{ background: "#080523", color: "#fff" }}
                        expandIcon={<ExpandMoreIcon color="#fff" />}
                        color="#fff"
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>
                          6 . When will I receive my staking rewards?
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{ background: "#080523", color: "white" }}
                      >
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Box></Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* </Grid> */}
          </Container>

          {/* <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
     </div> */}
        </Box>
      </Box>
    </Box>
  );
}

export default Five;
