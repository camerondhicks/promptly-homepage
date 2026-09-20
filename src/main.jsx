import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Inter, self-hosted. The opsz axis matches what the Google Fonts link
// used to request; serving it from our own origin drops a render-blocking
// third-party stylesheet plus two connection handshakes.
import "@fontsource-variable/inter/opsz.css";
import "@fontsource-variable/inter/opsz-italic.css";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
