// import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    common: {
      white: "#E9FBFA",
    },
    primary: {
      main: "#48007C",
      light: "#F3F4F7",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
      light: "#AD00FF",
      contrastText: "#48007C",
    },
  },
});
theme.overrides = {
  MuiCssBaseli: {
    "@global": {
      body: {
        fontsize: "10px",

        backgroundColor: "#ffffff",
        color: "",
      },
    },
  },
};
theme = responsiveFontSizes(theme);
export default theme;
