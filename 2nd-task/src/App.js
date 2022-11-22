import Navbar1 from "./Components/Navbar";
import Second from "./Components/2nd";
// import Third from "./Components/3rd";
import Four from "./Components/4th";
import Five from "./Components/5th";
import Footer1 from "./Components/footer";
import Pic1 from "./imges/dsr.png";

import { Box } from "@mui/material";
import CardsComponent from "./Components/CardsComponent";
import MainSection from "./Components/MainSection";

function App() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${Pic1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Navbar1 />
        <MainSection />
      </Box>

      <Second />
      <CardsComponent />
      <Four />
      <Five />
      <Footer1 />
    </Box>
  );
}

export default App;
