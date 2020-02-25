import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = ({
  redactComment,
  saveComment,
  setRef,
  author,
  textComment,
  redact,
  removeComment,
}) => {
  if (redactComment) {
    return (
      <div style={{ marginTop: '10px' }}>
        <textarea
          className="CommentChangeTextArea"
          defaultValue={textComment}
          ref={setRef}
        />
        <button onClick={saveComment} className="CommentChangeButton" type="button">
          Save
        </button>
      </div>
    );
  }
  return (
    <div className="Comment">
      <p>
        <span>
          {author}
          &#160;:
        </span>
      </p>
      <p>{textComment}</p>
      <hr />
      <p onClick={redact} onKeyPress={redact} className="CommentRedact">
        Redact
      </p>
      <p onClick={removeComment} onKeyPress={removeComment} className="CommentRemove">
        Remove
      </p>
    </div>
  );
};

Comment.propTypes = {
  redactComment: PropTypes.bool.isRequired,
  saveComment: PropTypes.func.isRequired,
  setRef: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  textComment: PropTypes.string.isRequired,
  redact: PropTypes.func.isRequired,
  removeComment: PropTypes.func.isRequired,
};

export default Comment;
