import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Fetcher } from "./components/Fetcher";
import GridGenerator, { MyGrid } from './components/GridGenerator'
import styled from "styled-components";
import { Resizable, ResizableBox } from 'react-resizable';
import "react-resizable/css/styles.css";


const rootElement = document.getElementById("root");

const T = () => {
  return (
    <div>

      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => <button key={i}></button>)}

    </div>
  );
}

const StyledSpan = styled.span`
  border: solid 3px red;
`;

const MaBox = () => {
  return (
    <ResizableBox
      className="box"
      width={200}
      height={200}
      minConstraints={[100, 100]}
      maxConstraints={[300, 300]}
      axis={"both"}
      resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}
      handleSize={[8, 8]}
      onResize={() => console.log("Resizing")}
      className={"box"}
    >
      <StyledSpan>AAAAAAAAAAAAAAA</StyledSpan>
    </ResizableBox>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <StyledSpan>{window.innerWidth}</StyledSpan>
    <MaBox>
      <StyledSpan>{window.innerWidth}</StyledSpan>
    </MaBox>
    <ResizableBox
      width={300}
      height={300}
      className="box"
      resizeHandles={["sw", "se", "nw", "ne", "w", "e", "n", "s"]}
    ></ResizableBox>

  </React.StrictMode >,
  rootElement
);