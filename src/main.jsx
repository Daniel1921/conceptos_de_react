import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { SimpleForm } from "./02-useEffect/simpleForm";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { HooksApp } from './HooksApp'
import "./index.css";
import { MultipleCustomHooks } from "./examples/MultipleCustomHooks";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <React.StrictMode> */}
    {/* <FormWithCustomHook/> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    <MultipleCustomHooks/>
    {/* </React.StrictMode>, */}
  </>
);
