import React, { createContext } from "react";
import { Box } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "./Conext";
// import { Global } from "./App";

export default function Child() {
  const { color } = useContext(AppContext);
  //   console.warn("");
  console.warn(color, "appcolor");
  return (
    <div>
      <>
        <Box sx={{ color: color }}>This is a child components </Box>
      </>
    </div>
  );
}
