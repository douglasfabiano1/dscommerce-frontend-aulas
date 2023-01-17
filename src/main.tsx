import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// this is the entrypoint of the react function.
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // function render do the renderization and produce the result on the screen.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
