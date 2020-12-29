import React, {
  useCallback,
  useEffect,
  useState,
  useMemo,
  createContext,
  useContext
} from "react";
import { Button } from "./MyButton";

const MyApp = (props) => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const defaultUser = {};
  const userContext = createContext(defaultUser);

  const user = useContext(userContext);

  const value = { name: "test", age: 22 };

  const getItems = useMemo(() => {
    const inp2 = document.getElementById("inp");
    if (inp2 === null || inp2.value === "") return [1, 2, 3];
    return [parseInt(number), parseInt(number) + 1, parseInt(number) + 2];
  }, [number]);

  useEffect(() => {
    const inp = document.getElementById("inp");
    setNumber(inp.value === "" ? 1 : inp.value);
  }, [getItems]);

  return (
    <>
      <input id="inp" onChange={(e) => setNumber(e.target.value)}></input>
      <div>
        <Button id="btn" onClick={(e) => setDark(!dark)}>
          Change Theme
        </Button>
        <div className={dark ? "dark" : "light"}>
          {getItems.map((item) => (
            <h2 key={Math.random()}>{item}</h2>
          ))}
        </div>
      </div>

      <div>
        <userContext.Provider value={value}>
          <Button onClick={(e) => console.log(user)}>Placeholder</Button>
        </userContext.Provider>
      </div>
    </>
  );
};

export default MyApp;
