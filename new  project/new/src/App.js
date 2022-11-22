import { Box } from "@mui/material";
import Navbar1 from "./Components/navbar";
import First from "./Components/1st";
import Third from "./Components/3rd";
import Four from "./Components/4th";
import Foter from "./Components/Foter";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <Box>
      <Navbar1 />
      <Routes>
        <Route path="/first" element={<First />} />
        <Route path="/third" element={<Third />} />
        <Route path="/four" element={<Four />} />
      </Routes>
      <ScrollToTop smooth color="#6f00ff" />
      <First />
      <Third />
      <Four />
      <Foter />
    </Box>
  );
}

export default App;
