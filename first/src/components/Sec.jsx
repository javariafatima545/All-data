// import { FormControl, MenuItem, InputLabel, Box } from "@mui/material";
// import React, { useState } from "react";
// import Select from "@mui/material/Select";

// function SelectComponent() {
//   const [age, setAge] = useState(" ");

//   const handlechange = (e) => {
//     setAge(e.target.value);
//   };
//   return (
//     <Box sx={{ minwidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel>age</InputLabel>
//         <Select
//           lableid="demo-simple-select-lable"
//           id="demo-simple-select"
//           value={age}
//           lable="age"
//           onchange={handlechange}
//         >
//           <MenuItem value={10}> ten</MenuItem>
//           <MenuItem value={20}> twenty</MenuItem>
//           <MenuItem value={30}> thirty</MenuItem>
//           <MenuItem value={40}> fourty</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );

//   }
// export default SelectComponent;
import {
  InputLabel,
  MenuItem,
  Box,
  FormControl,
  Select,
  ImageList,
} from "@mui/material";
import React from "react";

import pic2 from "./assets/download.jpg";
import pic3 from "./assets/top-view-roses-flowers_23-2148860041.webp";
import pic1 from "../imges/abc.jpg";

export default function BasicSelect() {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullwidth>
        <InputLabel id="demo-simple- select-label">age</InputLabel>
        <Select
          labelid="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}> 10</MenuItem>
          <MenuItem value={20}> 20</MenuItem>
          <MenuItem value={30}> 30</MenuItem>
        </Select>
      </FormControl>

      <Box>
        <img src={pic2} alt="" width={"500px"} height="200px" />
        <img src={pic3} alt="" width={"400px"} height="200px" my={4} />
        <ImageList
          sx={{ width: 300, height: 400 }}
          cols={4}
          rowheight={121}
          src={pic1}
        />

        <ImageList sx={{ width: 200, height: 300 }} cols={2}>
          <img src={pic1} alt="" width="200px" height="300px" />
        </ImageList>
      </Box>

      <Box textalign="center" my={2} fontSize={14}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia in
        deleniti provident assumenda a.
      </Box>
    </Box>
  );
}
