import React from "react";
import { Router } from "react-router-dom";
import "./styles/styles.scss";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
