// Import the React and ReactDOM libraries

import React from "react";
import ReactDom from "react-dom";
import CommentDetails from "./Components/CommentDetails";

function getButtonText() {
  return "Click me!";
}
// Create a react component

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetails author="Sam" />
      <CommentDetails author="Alex" />
      <CommentDetails author="Jane" />
    </div>
  );
};

// Take a react component and show it on the screen

ReactDom.render(<App />, document.querySelector("#root"));
