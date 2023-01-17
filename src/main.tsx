import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./global.css";
import "@fontsource/public-sans";
import { CssVarsProvider, extendTheme, Theme } from "@mui/joy";

const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          solidBg: "#056aa7",
          solidHoverBg: "#015a8f",
          outlinedBorder: "#056aa7",
        },
        neutral: {
          softBg: "#414150",
          softHoverBg: "#505064",
          outlinedBorder: "#727272",
          outlinedHoverBorder: "#056aa7",
        },
        background: {
          surface: "#2b2b3b",
        },
      },
    },
  },
  components: {
    JoyButton: {
      defaultProps: {
        className: "rtl-button-style",
      },
      styleOverrides: {
        root: {
          boxSizing: "border-box",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme} defaultMode="system">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CssVarsProvider>
  </React.StrictMode>
);
