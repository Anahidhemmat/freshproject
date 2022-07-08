import CommentDetails from "./Components/CommentDetails";
import ApprovalCard from "./Components/ApprovalCard";
import { faker } from "@faker-js/faker";
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

export default App;
