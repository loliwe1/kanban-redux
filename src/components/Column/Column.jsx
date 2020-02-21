import React from 'react';
import './Column.css';
import NewCardFormContainer from '../NewCardForm/NewCardFormContainer';
import Card from '../Card/Card';

const Column = (props) => (
  <div className="Column">
    <div
      ref={props.setRef}
      onBlur={props.changeTitleColumn}
      className="ColumnTitle"
      contentEditable={true}
      suppressContentEditableWarning={true}
    >
      {props.title}
    </div>
    {props.cards &&
      props.cards.map(card => {
        const commentsLength = props.comments.filter(
          comment => comment.cardId === card.id
        ).length;
        return (
          <Card
            title={card.title}
            key={card.id}
            id={card.id}
            openPopupCard={() => props.openPopupCard(card.id)}
            commentsLength={commentsLength}
          />
        );
      })}
    <p onClick={props.openForm}>&#10010; Добавить карточку</p>
    {props.isOpen && (
      <NewCardFormContainer
        closeForm={props.closeForm}
        createNewCard={props.createNewCard}
        columnId={props.columnId}
      />
    )}
  </div>
);

export default Column;
