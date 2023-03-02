import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heaveStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("iteración del 0 al 100, actualmente por: " + i);
  }
  return `${iterationNumber} iteraciones realizadas!`
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);
  const memorizeValue = useMemo(() => heaveStuff(counter), [counter])

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4>{memorizeValue}</h4>

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      <button className="btn btn-outline-danger" onClick={() => setShow(!show)}>
        show/hide {JSON.stringify(show)}
      </button>
    </>
  );
};
