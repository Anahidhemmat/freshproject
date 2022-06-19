// Import the React and ReactDOM libraries

import React from "react";
import ReactDom from "react-dom";

function getButtonText() {
  return "Click me!";
}
// Create a react component

const App = () => {
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input type="text" />
      <button style={{ backgroundColor: "yellow", color: "black" }}>
        {getButtonText()}
      </button>
    </div>
  );
};

// Take a react component and show it on the screen

ReactDom.render(<App />, document.querySelector("#root"));
