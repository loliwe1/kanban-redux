import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Layout from "./Layout";

class LayoutContainer extends Component {
  //   changeDescription = (value, cardId) => {
  //     const cards = this.props.cards;
  //     const id = cards.findIndex(card => card.id === cardId);
  //     cards[id].description = value;

  //     this.setState({ cards });
  //     localStorage.setItem("cards", JSON.stringify(cards));
  //   };

  //   saveTitle = newTitle => {
  //     if (!newTitle) return;

  //     const cardId = this.props.popupCard.id;
  //     const cards = this.props.cards.concat();

  //     const id = cards.findIndex(card => card.id === cardId);
  //     cards[id].title = newTitle;

  //     this.setState({ cards });
  //     localStorage.setItem("cards", JSON.stringify(cards));
  //   };

  //   removeCard = cardId => {
  //     const cards = this.state.cards.concat();
  //     const id = cards.findIndex(card => card.id === cardId);
  //     cards.splice(id, 1);

  //     // remove comments
  //     const comments = this.props.comments.filter(
  //       comment => comment.cardId !== cardId
  //     );

  //     this.setState({ popupCard: "", cards, comments });
  //     localStorage.setItem("cards", JSON.stringify(cards));
  //     localStorage.setItem("comments", JSON.stringify(comments));
  //   };

  //   postComment = comment => {
  //     comment.cardId = this.state.popupCard.id;
  //     comment.id = this.state.nextCommentId;
  //     comment.author = this.state.name;

  //     const comments = this.state.comments;
  //     comments.unshift(comment);

  //     let nextCommentId = this.state.nextCommentId;
  //     nextCommentId += 1;

  //     this.setState({ comments, nextCommentId });
  //     localStorage.setItem("comments", JSON.stringify(comments));
  //     localStorage.setItem("nextCommentId", JSON.stringify(nextCommentId));
  //   };

  //   filtersComments = () => {
  //     const comments = this.state.comments.filter(
  //       comment => comment.cardId === this.state.popupCard.id
  //     );
  //     return comments;
  //   };

  //   saveChangesComment = ({ commentText, id }) => {
  //     const comments = this.state.comments;
  //     comments.find(comment => comment.id === id).commentText = commentText;

  //     this.setState({ comments });
  //     localStorage.setItem("comments", JSON.stringify(comments));
  //   };

  //   deleteComment = ({ id }) => {
  //     const comments = this.state.comments;
  //     const comId = comments.findIndex(comment => comment.id === id);
  //     comments.splice(comId, 1);

  //     this.setState({ comments });
  //     localStorage.setItem("comments", JSON.stringify(comments));
  //   };

  //   changeTitlePopupCard = (value, cardId) => {
  //     const cards = this.state.cards;
  //     const id = cards.findIndex(card => card.id === cardId);
  //     cards[id].title = value;

  //     this.setState({ cards });
  //     localStorage.setItem("cards", JSON.stringify(cards));
  //   };
  render() {
    let popupCard;
    let popupCardColumn;
    if (this.props.popupId) {
      popupCard = this.props.cards.find(card => card.id === this.props.popupId);
      popupCardColumn = this.props.columns.find(
        column => column.id === popupCard.columnId
      ).title;
    }

    return (
      <Layout
        popupCardColumn={popupCardColumn}
        popupCard={popupCard}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards,
  columns: state.columns,
  app: state.app,
  comments: state.app.comments,
  name: state.app.name,
  popupId: state.popupCard.id
});

const mapDispatchToProps = dispatch => bindActionCreators({});

export default connect(mapStateToProps)(LayoutContainer);
