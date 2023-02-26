import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, email, password} = useForm({
    username: "",
    email: "",
    password: "",
  });
 // tambien se puede recurrir a este metodo 
  // const { username, email, password} = formState;

  return (
    <>
      <h1>Form con custom hook</h1>
      <hr />
      <input
        type="text"
        name="username"
        className="form-control"
        placeholder="Username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="text"
        name="email"
        className="form-control mt-2"
        placeholder="Email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        name="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-danger mt-2" >Borrar</button>
    </>
  );
};
