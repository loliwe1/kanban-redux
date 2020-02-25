import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PopupCard from './PopupCard';
import {
  closePopupCard,
  removeCard,
  changeCardDescription,
  changeCardTitle,
  addComment,
} from '../../store/actions/actions';

class PopupCardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { commentFormFocus: false };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.closePopupOnEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closePopupOnEsc);
  }

  closePopupOnEsc = (element) => {
    if (element.key === 'Escape') {
      this.closePopupCard();
    }
  };


  closePopupCard = () => {
    const { closePopupCard } = this.props;
    closePopupCard();
  };

  focusCommentForm = () => {
    this.setState({ commentFormFocus: true });
  };

  changeCardTitle = () => {
    const { changeCardTitle, cardId } = this.props;
    const value = this.textInput.textContent;
    changeCardTitle(cardId, value);
  };

  setRef = (element) => {
    this.textInput = element;
  };

  setRefDesc = (element) => {
    this.textInputDesc = element;
  };

  changeCardDescription = () => {
    const value = this.textInputDesc.textContent;
    const { changeCardDescription, cardId } = this.props;
    changeCardDescription(cardId, value);
  };

  setRefComment = (element) => {
    this.commentInput = element;
  };

  addComment = () => {
    const { value } = this.commentInput;
    if (!value) return;
    const {
      addComment,
      nextCommentId,
      name,
      cardId,
    } = this.props;

    addComment(value, nextCommentId, name, cardId);
    this.commentInput.value = '';
    this.setState({ commentFormFocus: false });
  };

  removeCard = () => {
    const {
      cards,
      cardId,
      name,
      removeCard,
    } = this.props;
    const currentCard = cards.find((card) => card.id === cardId);
    if (currentCard.creator !== name) return;

    this.closePopupCard();
    removeCard(cardId);
  };

  render() {
    const {
      name,
      comments,
      cards,
      columns,
      cardId,
    } = this.props;
    const { commentFormFocus } = this.state;
    const currentCard = cards.find((card) => card.id === cardId);

    const currentColumnTitle = columns.find(
      (column) => column.id === currentCard.columnId,
    ).title;

    return (
      <PopupCard
        card={currentCard}
        name={name}
        columnTitle={currentColumnTitle}
        changeCardDescription={this.changeCardDescription}
        changeCardTitle={this.changeCardTitle}
        commentFormFocus={commentFormFocus}
        focusCommentForm={this.focusCommentForm}
        closePopupCard={this.closePopupCard}
        addComment={this.addComment}
        removeCard={this.removeCard}
        setCommentInputRef={this.setCommentInputRef}
        setRefDesc={this.setRefDesc}
        setRef={this.setRef}
        setRefComment={this.setRefComment}
        comments={comments.filter(
          (comment) => comment.cardId === cardId,
        )}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.app.name,
  nextCommentId: state.app.nextCommentId,
  comments: state.comments,
  cardId: state.app.currentCardId,
  cards: state.cards,
  columns: state.columns,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  closePopupCard,
  removeCard,
  changeCardDescription,
  changeCardTitle,
  addComment,
}, dispatch);

PopupCardContainer.defaultProps = {
  cardId: null,
};

PopupCardContainer.propTypes = {
  name: PropTypes.string.isRequired,
  nextCommentId: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  closePopupCard: PropTypes.func.isRequired,
  removeCard: PropTypes.func.isRequired,
  changeCardDescription: PropTypes.func.isRequired,
  changeCardTitle: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  columns: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  cardId: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupCardContainer);
