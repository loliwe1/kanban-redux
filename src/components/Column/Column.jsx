import React from 'react';
import PropTypes from 'prop-types';
import './Column.css';
import NewCardFormContainer from '../NewCardForm/NewCardFormContainer';
import CardContainer from '../Card/CardContainer';

const Column = ({
  setRef,
  changeTitleColumn,
  title,
  cards,
  openForm,
  isOpen,
  closeForm,
  columnId,
  comments,
}) => (
  <div className="Column">
    <div
      ref={setRef}
      onBlur={changeTitleColumn}
      className="ColumnTitle"
      contentEditable
      suppressContentEditableWarning
    >
      {title}
    </div>
    {cards
    && cards.map((card) => {
      const commentsLength = comments.filter(
        (comment) => comment.cardId === card.id,
      ).length;
      return (
        <CardContainer
          title={card.title}
          key={card.id}
          id={card.id}
          commentsLength={commentsLength}
        />
      );
    })}
    <p onClick={openForm}>&#10010; Добавить карточку</p>
    {isOpen && (
      <NewCardFormContainer
        closeForm={closeForm}
        columnId={columnId}
      />
    )}
  </div>
);

Column.propTypes = {
  setRef: PropTypes.func.isRequired,
  changeTitleColumn: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  openForm: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeForm: PropTypes.func.isRequired,
  columnId: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};


export default Column;
