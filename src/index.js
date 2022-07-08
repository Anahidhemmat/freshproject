// Import the React and ReactDOM libraries

import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { createStore } from "redux";
import allReducers from "./reducers";

const store = createStore(allReducers);

// Take a react component and show it on the screen

ReactDom.render(<App />, document.querySelector("#root"));
