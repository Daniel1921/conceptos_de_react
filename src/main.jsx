import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { SimpleForm } from "./02-useEffect/simpleForm";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
import { HooksApp } from './HooksApp'
import { MultipleCustomHooks } from "./examples/MultipleCustomHooks";
import { FocusScreen } from "./03-useRef/FocusScreen";
import { Layout } from "./04-useLayoutEffect/layout";
import { Memorize } from "./05-memo/Memorize";
import { MemoHook } from "./05-memo/MemoHook";
import { CallbackHook } from "./05-memo/CallbackHook";
import { Padre } from "./07-tarea-memo/Padre";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <React.StrictMode> */}
    {/* <FormWithCustomHook/> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <MultipleCustomHooks/> */}
    {/* <FocusScreen/> */}
    {/* <Layout/> */}
    {/* <Memorize/> */}
    {/* <MemoHook/> */}
    {/* <CallbackHook/> */}
    <Padre/>
    {/* </React.StrictMode>, */}
  </>
);
