// Import the React and ReactDOM libraries

import React from "react";
import ReactDom from "react-dom";
import CommentDetails from "./Components/CommentDetails";
import ApprovalCard from "./Components/ApprovalCard";
import { faker } from "@faker-js/faker";
import { createStore } from "redux";

// function getButtonText() {
//   return "Click me!";
// }

// ACTION => INCREMENT

const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

//REDUCER

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

let store = createStore(counter);

//DISPLAY it in the console
store.subscribe(() => console.log(store.getState()));

// DISPATCH
store.dispatch(increment());
// Create a react component

const App = () => {
  return (
    <div></div>

    // <div className="ui container comments">
    //   <ApprovalCard>
    //     <div>
    //       <h4>Warning!</h4>
    //       Are you sure you want to do this?
    //     </div>
    //   </ApprovalCard>
    //   <ApprovalCard>
    //     <CommentDetails
    //       author="Sam"
    //       time="Today at 4:45PM"
    //       content="Nice blog post"
    //       avatar={faker.image.avatar()}
    //     />
    //   </ApprovalCard>

    //   <ApprovalCard>
    //     <CommentDetails
    //       author="Alex"
    //       time="Today at 6:00PM"
    //       content="I like the subjext"
    //       avatar={faker.image.avatar()}
    //     />
    //   </ApprovalCard>
    //   <ApprovalCard>
    //     <CommentDetails
    //       author="Jane"
    //       time="Today at 2:12AM"
    //       content="I like the writing"
    //       avatar={faker.image.avatar()}
    //     />
    //   </ApprovalCard>
    // </div>
  );
};

// Take a react component and show it on the screen

ReactDom.render(<App />, document.querySelector("#root"));
