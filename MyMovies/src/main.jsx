import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";

//import { Home } from "./pages/Home";
//import { Details } from "./pages/Details";
//import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";



import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SignUp/>
    </ThemeProvider>
  </React.StrictMode>
);
