import React from "react";
import { Button } from "./MyButton";

export const MyList = () => {
  return (
    <div>
      {Array.prototype.map((index) => (
        <div>
          <Button key={index}>{index}</Button>
        </div>
      ))}
    </div>
  );
};
