import { createMuiTheme } from "@material-ui/core";
import { theme } from "./default";

const overrides = {
  MuiButton: {
    containedSecondary: {
      backgroundColor: "red",
      color: "white",
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: "Poppins",
    letterSpacing: 0.32,
    h1: {
      fontSize: "5rem",
      fontWeight: 900,
    },
    h2: {
      fontWeight: 800,
      fontSize: "3rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.64rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontWeight: 500,
      fontSize: "1.285rem",
    },
    h6: {
      fontSize: "1.142rem",
    },
    body2: {
      fontWeight: 600,
      fontSize: "1.2rem",
    },
  },
};

export const defaultTheme = createMuiTheme({ ...theme, ...overrides });
