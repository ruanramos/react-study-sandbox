import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Fetcher } from "./components/Fetcher";
import { Counter } from "./Counter";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Fetcher /> */}
    <Counter />
  </React.StrictMode>,
  rootElement
);
