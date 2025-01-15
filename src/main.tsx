import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./router.tsx";
import GlobalStyle from "./GlobalStyle.tsx";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme.ts";
import { darkTheme } from "./theme.ts";

// TODO: Agregar el cambio del tema

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  </StrictMode>
);
