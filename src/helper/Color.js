import { createTheme } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";
import { red } from "@mui/material/colors";

export const THEME = createTheme({
  palette: {
    app_primary: {
      main: indigo[700],
      contrastText: "#fff",
    },
    danger:{
      main:red[600],
      contrastText: "#fff",
    }
  },
});
