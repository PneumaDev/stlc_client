import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallBack";
// import { AudioProvider } from "./Utils/AudioContext";
import PlayerContextProvider from "./context/PlayerContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <PlayerContextProvider>
          <App />
        </PlayerContextProvider>
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>
);
