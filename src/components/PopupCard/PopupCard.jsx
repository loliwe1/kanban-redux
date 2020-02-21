import React from 'react';
import './PopupCard.css';
import CommentContainer from '../Comment/CommentContainer';

const PopupCard = (props) => {
  const commentClass = ['WriteCommentWrap'];
  const { commentFormFocus } = props;

  if (commentFormFocus) {
    commentClass.push('WriteCommentWrapFocus');
  }

  return (
    <div className="PopupCard">
      <div className="PopupCardWrap">
        <div className="PopupCardClose">
          <p className="PopupCardCloseLink" onClick={props.closePopupCard}>
            Close
          </p>
        </div>
        <div className="PopupCardTitle">
          {props.creator === props.name ? (
            <h1
              ref={props.setRef}
              className="TitleHeader"
              contentEditable={true}
              suppressContentEditableWarning={true}
              onBlur={props.changeCardTitle}
            >
              {props.title}
            </h1>
          ) : (
              <h1 className="TitleHeader">{props.title}</h1>
            )}
          <small>
            In column: <span>{props.column}</span>
          </small>
          <p>
            Created a card: <span>{props.creator}</span>
          </p>
        </div>
        {props.creator !== props.name ? (
          <div className="Description">{props.description || ''}</div>
        ) : (
          <div
            contentEditable={true}
            suppressContentEditableWarning={true}
            className="Description"
            onBlur={props.changeCardDescription}
            ref={props.setRefDesc}
          >
              {props.description || 'Enter a description for the card!'}
          </div>
        )}
        <div>Comments:</div>
        <div className={commentClass.join(' ')}>
          <textarea
            onFocus={props.focusCommentForm}
            className="WriteComment"
            placeholder="write a comment..."
            ref={props.setRefComment}
          />
          <button onClick={props.addComment} type="button" className="PostCommentButton">
            Save
          </button>
        </div>
        {props.comments
          && props.comments.map((comment, i) => {
            return (
              <CommentContainer
                author={comment.author}
                key={comment.id}
                textComment={comment.textComment}
                name={props.name}
                saveChangesComment={props.saveChangesComment}
                id={comment.id}
                deleteComment={props.deleteComment}
              />
            );
          })}
        <button onClick={props.removeCard} type="button" className="RemoveCard">
          Remove Card
        </button>
      </div>
    </div>
  );
};

export default PopupCard;