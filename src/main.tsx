import { CssBaseline, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline enableColorScheme={true} />
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>,
);
