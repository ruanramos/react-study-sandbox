import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Fetcher } from "./components/Fetcher";
import GridGenerator, { MyGrid } from './components/GridGenerator'
import styled from "styled-components";

const rootElement = document.getElementById("root");

const T = () => {
  return (
    <div>

      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map( i => <button key={i}></button>)}

    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div className="ble">
      {/*<MyGrid bla="blablaaa" className="centered"/>*/}
    <T classname="ble"></T>
    </div>
  </React.StrictMode>,
  rootElement
);


