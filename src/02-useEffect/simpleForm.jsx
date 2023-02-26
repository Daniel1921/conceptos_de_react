import { useEffect, useState } from "react";
import { Message } from "./message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "daniel",
    email: "daniel1921mb@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
      [email]: value,
    });
  };

  useEffect(() => {
    // console.log('useEfect called');
  }, []);

  useEffect(() => {
    // console.log('Form State Change');
  }, [formState]);

  useEffect(() => {
    // console.log('email Change');
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
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

      {username === "daniel2" && <Message />}
    </>
  );
};
