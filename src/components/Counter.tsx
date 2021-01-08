import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div data-testid="counter-test">
      <button onClick={() => setCounter(counter + 1)}>Increase</button>{" "}
      <p>{counter}</p>
    </div>
  );
};
