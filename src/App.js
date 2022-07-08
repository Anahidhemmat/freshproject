import CommentDetails from "./Components/CommentDetails";
import ApprovalCard from "./Components/ApprovalCard";
import { faker } from "@faker-js/faker";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
const App = () => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>- </button>

      {isLogged ? <h3>Hidden info</h3> : ""}
    </div>

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

export default App;
