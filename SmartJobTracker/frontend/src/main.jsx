import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";

import App from "./App";

function Root() {
  const [darkMode, setDarkMode] =
    useState(() => {
      return (
        localStorage.getItem(
          "themeMode"
        ) === "dark"
      );
    });

  useEffect(() => {
    localStorage.setItem(
      "themeMode",
      darkMode
        ? "dark"
        : "light"
    );
  }, [darkMode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode
            ? "dark"
            : "light",
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <App
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);