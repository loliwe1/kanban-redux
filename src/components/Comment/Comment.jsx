import React from "react";
import "./Comment.css";

const Comment = props => {
  if (props.redactComment) {
    return (
      <div>
        <textarea
          className="CommentChangeTextArea"
          autoFocus
          defaultValue={props.commentText}
          ref={props.setRef}
        />
        <button onClick={props.saveComment} className="CommentChangeButton">
          Save
        </button>
      </div>
    );
  } else {
    return (
      <div className="Comment">
        <p>
          <span>{props.author}&#160;:</span>
        </p>
        <p>{props.textComment}</p>
        <hr />
        <p onClick={props.redact} className="CommentRedact">
          Redact
        </p>
        <p onClick={props.removeComment} className="CommentRemove">
          Remove
        </p>
      </div>
    );
  }
};

export default Comment;
