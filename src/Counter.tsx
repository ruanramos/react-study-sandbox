import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>{" "}
      {counter}
    </div>
  );
};
