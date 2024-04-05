import { createTheme } from "@mui/material";

export const lighttheme = createTheme({
  palette: {
    primary: {
      main: "#FF5000",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#CCCCCC",
      contrastText: "#121212",
    },
    background: {
      default: "#E0E0E0",
      paper: "#F4F4F4",
    },
  },
});