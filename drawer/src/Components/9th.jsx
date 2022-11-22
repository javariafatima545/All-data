import React from 'react'
import {Grid ,Box} from "@mui/material"
import Pic1 from "../imges/Group17.png"
import Pic2 from "../imges/g10.png"
import { Container } from '@mui/system'


function Nine() {
    return (
        <Container maxWidth="md">
        <Grid conatiner>
              <Grid  item  xs={12}  sx={{textAlign:"center"}}> <img src={Pic1} alt="" /> </Grid>
<Box display ="flex" py={10}>
 <Grid item  xs={12}  sm={6} md={3} ><img src={Pic2} alt="" width={"50%"}/></Grid>
 <Grid item  xs={12}  sm={6} md={3} ><img src={Pic2} alt=""  width={"50%"}/></Grid>
 <Grid item  xs={12}  sm={6} md={3} ><img src={Pic2} alt="" width={"50%"} /></Grid>
 <Grid item  xs={12}  sm={6} md={3} ><img src={Pic2} alt=""  width={"50%"}/></Grid>
 </Box>
        </Grid>
        </Container>
      
        
    )
}

export default Nine
