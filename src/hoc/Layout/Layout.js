import React from "react";
import "./Layout.css";
import ColumnContainer from "../../components/Column/ColumnContainer";
import PopupCard from "../../components/PopupCard/PopupCard";
import PopupNameContainer from "../../components/PopupName/PopupNameContainer";
import PopupCardContainer from "../../components/PopupCard/PopupCardContainer";

const Layout = props => (
  <div className="Layout">
    {props.columns.map(column => {
      return (
        <ColumnContainer
          key={column.id}
          id={column.id}
          title={column.title}
          changeTitle={props.changeTitle}
          createNewCard={props.createNewCard}
          cards={props.cards.filter(card => card.columnId === column.id)}
          openPopupCard={props.openPopupCard}
          comments={props.comments}
        />
      );
    })}
    {!props.name && <PopupNameContainer />}
    {props.popupCard && (
      <PopupCardContainer
        name={props.name}
        creator={props.popupCard.creator}
        cardId={props.popupCard.id}
        title={props.popupCard.title}
        description={props.popupCard.description}
        column={props.popupCardColumn}
        comments={props.filtersComments}
        changeDesc={props.changeDescription}
        saveTitle={props.saveTitle}
        postComment={props.postComment}
        saveChangesComment={props.saveChangesComment}
        deleteComment={props.deleteComment}
        changeTitlePopupCard={props.changeTitlePopupCard}
      />
    )}
  </div>
);

export default Layout;
