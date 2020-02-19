import React from "react";
import "./Comment.css";

const Comment = props => {
  if (props.changeComment) {
    return (
      <div>
        <textarea
          className="CommentChangeTextArea"
          autoFocus
          defaultValue={props.commentText}
          onChange={props.changeComment}
        />
        <button
          onClick={props.saveChangesComment}
          className="CommentChangeButton"
        >
          Save
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          <span>{props.author}&#160;:</span>
        </p>
        <p>{props.commentText}</p>
        <hr />
        <p onClick={props.redactComment} className="CommentRedact">
          Redact
        </p>
        <p onClick={props.deleteComment} className="CommentRemove">
          Remove!
        </p>
      </div>
    );
  }
};

export default Comment;
