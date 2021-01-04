import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Fetcher } from "./components/Fetcher";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Fetcher />
  </React.StrictMode>,
  rootElement
);
