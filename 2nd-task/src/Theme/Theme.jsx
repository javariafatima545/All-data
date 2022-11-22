import { createTheme, responsivefontsize } from "@mui/material/styles";
let theme = createTheme({
  palette: {
    common: {
      white: "#FFFFFF",
    },
  },
});
theme.overrides = {
  MuiCssBaseli: {
    "@global": {
      body: {
        fontsize: "10px",
        fontfamily: "Lato",
      },
    },
  },
};
theme = responsivefontsize(theme);
export default theme;
