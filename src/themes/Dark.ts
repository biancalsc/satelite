import { createTheme } from "@mui/material";

export const darktheme = createTheme({
  palette: {
    primary: {
      main: "#FF5000",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#222223",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#121212",
      paper: "#373738",
    },
  },
});