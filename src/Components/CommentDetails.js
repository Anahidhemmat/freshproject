import { faker } from "@faker-js/faker";

const CommentDetails = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={faker.image.avatar()} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="data">Today at 6:00PM</span>
        </div>
        <div className="text">Nice blog post!</div>
      </div>
    </div>
  );
};

export default CommentDetails;
