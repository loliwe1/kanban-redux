import React from 'react';
import PropTypes from 'prop-types';
import './PopupCard.css';
import CommentContainer from '../Comment/CommentContainer';

const PopupCard = ({
  commentFormFocus,
  closePopupCard,
  name,
  setRef,
  changeCardTitle,
  card,
  columnTitle,
  changeCardDescription,
  setRefDesc,
  focusCommentForm,
  setRefComment,
  addComment,
  comments,
  removeCard,
  isOwner,
}) => {
  const { title, creator, description } = card;
  const commentClass = ['WriteCommentWrap'];

  if (commentFormFocus) {
    commentClass.push('WriteCommentWrapFocus');
  }

  return (
    <div className="PopupCard">
      <div className="PopupCardWrap">
        <div className="PopupCardClose">
          <p className="PopupCardCloseLink" onClick={closePopupCard}>
            Close
          </p>
        </div>
        <div className="PopupCardTitle">
          {creator === name ? (
            <h1
              ref={setRef}
              className="TitleHeader"
              contentEditable
              suppressContentEditableWarning
              onBlur={changeCardTitle}
            >
              {title}
            </h1>
          ) : (
            <h1 className="TitleHeader">{title}</h1>
          )}
          <small>
            In column:
            <span>{columnTitle}</span>
          </small>
          <p>
            Created a card:
            <span>{creator}</span>
          </p>
        </div>
        {creator !== name ? (
          <div className="Description">{description || ''}</div>
        ) : (
          <div
            contentEditable
            suppressContentEditableWarning
            className="Description"
            onBlur={changeCardDescription}
            ref={setRefDesc}
          >
            {description || 'Enter a description for the card!'}
          </div>
        )}
        <div>Comments:</div>
        <div className={commentClass.join(' ')}>
          <textarea
            onFocus={focusCommentForm}
            className="WriteComment"
            placeholder="write a comment..."
            ref={setRefComment}
          />
          <button onClick={addComment} type="button" className="PostCommentButton">
            Save
          </button>
        </div>
        {comments
          && comments.map((comment) => {
            return (
              <CommentContainer
                author={comment.author}
                key={comment.id}
                textComment={comment.textComment}
                name={name}
                id={comment.id}
              />
            );
          })}
        {isOwner && (
          <button onClick={removeCard} type="button" className="RemoveCard">
            Remove Card
          </button>
        )}
      </div>
    </div>
  );
};

PopupCard.defaultProps = {
  card: {},
};

PopupCard.propTypes = {
  card: PropTypes.objectOf(PropTypes.any),
  commentFormFocus: PropTypes.bool.isRequired,
  closePopupCard: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setRef: PropTypes.func.isRequired,
  changeCardTitle: PropTypes.func.isRequired,
  columnTitle: PropTypes.string.isRequired,
  changeCardDescription: PropTypes.func.isRequired,
  setRefDesc: PropTypes.func.isRequired,
  focusCommentForm: PropTypes.func.isRequired,
  setRefComment: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  removeCard: PropTypes.func.isRequired,
  isOwner: PropTypes.bool.isRequired,
};

export default PopupCard;
