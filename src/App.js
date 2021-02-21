import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import Main from "./screens/Main";
import { defaultTheme } from "./themes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
