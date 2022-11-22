// import React from "react";
// import {
//   AppBar,
//   IconButton,
//   Toolbar,
//   Typography,
// //   Barr,
//   Box,
//   TextField,
// } from "@mui/material";
// import styled from "@emotion/styled";
// import { Paper } from "@mui/material";

// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";

// const Barr = styled(Paper)({
//   position: "relative",
//   borderRadius: "100%",
//   backgroundColor: "yellowgreen",
//   Hover: "hover",
// });
// const SearchIconWrapper = styled()({});

// function Navbar333() {
//   return (
//     <>
//       <Box sm={{ flexgrow: 3 }} border="2px solid black">
//         <AppBar position="static">
//           <Toolbar>
//             <IconButton color="error">
//               <MenuIcon />
//             </IconButton>

//             <Typography variant="h6" component="span" sx={{ flexGrow: 4 }}>
//               Home11
//             </Typography>
//             {/* <Button color="inherit">login</Button> */}
//             <Barr>
//               <TextField
//                 id="outlined-search"
//                 label="Search field"
//                 type="search"
//               />
//               <SearchIcon />
//             </Barr>
//           </Toolbar>
//         </AppBar>
//       </Box>
//     </>
//   );
// }

// export default Navbar333;


import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
            //   inputProps={{ 'aria-label': 'searchaaa' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
