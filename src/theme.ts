import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffffff",
    },
    secondary: {
      main: "#161616ff",
    },
  },
  typography: {
    fontFamily: "Segoe UI"
  }
});

export default theme;