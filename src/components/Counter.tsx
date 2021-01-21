import React, { useState, useEffect } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const actualLocal = localStorage.getItem("count");
    const actualSession = sessionStorage.getItem("count");
    if (actualLocal) localStorage.setItem("count", (parseInt(actualLocal) + 1).toString());
    if (actualSession) sessionStorage.setItem("count", (parseInt(actualSession) + 1).toString());

  }, [counter])

  useEffect(() => {
    if (!localStorage.getItem("count")) {
      console.log("Starting local to 0")
      localStorage.setItem("count", "0")
    };
    if (!sessionStorage.getItem("count")) {
      console.log("Starting session to 0")
      sessionStorage.setItem("count", "0")

    };
  }, [])

  const resetCounter = (() => {
    setCounter(0);
  });

  return (
    <div data-testid="counter-test">
      <button onClick={() => setCounter(counter + 1)}>Increase</button>{" "}
      <button onClick={() => resetCounter()}>Reset</button>{" "}
      <p>{counter}</p>
      <p>{`Local:${localStorage.getItem("count")}`}</p>
      <p>{`Session:${sessionStorage.getItem("count")}`}</p>

    </div>
  );
};
