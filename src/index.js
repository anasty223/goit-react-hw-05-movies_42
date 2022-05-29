import "./index.css";
import App from "./App";

import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too

render(
  <BrowserRouter basename="/https://anasty223.github.io/goit-react-hw-05-movies_42/">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
