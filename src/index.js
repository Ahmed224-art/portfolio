import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter } from "react-router-dom/cjs/react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Router>
        <App />
      </Router>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);