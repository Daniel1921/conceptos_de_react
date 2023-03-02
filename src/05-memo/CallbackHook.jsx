import { useState, useCallback, useEffect } from "react";
import { ShowIncrement } from "./showIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  const increment = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

   useEffect(() => {
     
   }, [increment]);

  return (
    <>
      <h1>UseCallback Hooks: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </>
  );
};
