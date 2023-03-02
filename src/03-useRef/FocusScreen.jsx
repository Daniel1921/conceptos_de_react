import { useRef } from "react";

export const FocusScreen = () => {
    const inputRef = useRef()
    const onClick = () => {
       inputRef.current.select();
    }
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input type="text" ref={inputRef} name="name" placeholder="Ingrese su nombre" className="form-control mt-2" />
      <button onClick={onClick} className="btn btn-success mt-2"> Focus Input! </button>
    </>
  );
};
