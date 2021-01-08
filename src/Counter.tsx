import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState({
    normalCounter: 0,
    sessionStorageCounter: 0,
    localStorageCounter: 0
  });

  const increment = () => {
    setCounter({
      normalCounter: counter.normalCounter + 1,
      sessionStorageCounter: counter.sessionStorageCounter + 1,
      localStorageCounter: counter.localStorageCounter + 1
    });
    localStorage?.setItem("counter", counter.localStorageCounter.toString());
    sessionStorage?.setItem(
      "counter",
      counter.sessionStorageCounter.toString()
    );
  };

  return (
    <div data-testid="counter-test">
      <button onClick={increment}>Increase</button>{" "}
      <p>{counter.normalCounter}</p>
      <p>{`Session Counter: ${counter.sessionStorageCounter}`}</p>
      <p>{`Local Counter: ${counter.localStorageCounter}`}</p>
    </div>
  );
};
