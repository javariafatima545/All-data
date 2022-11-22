import Navbar1 from "./Components/Navbar";
import First from "./Components/1st";
import Pic1 from "./imges/1st.png";
import Second from "./Components/2nd";
import Third from "./Components/3rd";
import Four from "./Components/4th";
import Five from "./Components/5th";
import Six from "./Components/6th";
import Seven from "./Components/7th";
import { Box } from "@mui/material";
import Eight from "./Components/8th";
import Nine from "./Components/9th";
import Teen from "./Components/10th";
import TemporaryDrawer from "./Components/dewar";
import Child from "./Child";

//  const Global = createContext;

function App() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${Pic1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          width: "100%",
        }}
      >
        <Navbar1 />
        <First />
        <Second />
      </Box>

      <Third />
      <Four />
      <Five />
      <Six />
      <Seven />
      <Eight />
      <Nine />
      <Teen />
      <TemporaryDrawer />

      <Child />
    </>
  );
}

export default App;
