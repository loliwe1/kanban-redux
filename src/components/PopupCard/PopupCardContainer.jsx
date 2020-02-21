import React, { Component } from 'react';
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
  state = {
    commentFormFocus: false
  };

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
    const value = this.commentInput.value;
    if (!value) return;
    const { addComment, nextCommentId, name } = this.props;

    addComment(value, nextCommentId, name, this.props.cardId);
    this.commentInput.value = '';
    this.setState({ commentFormFocus: false });
  };

  removeCard = () => {
    if (this.props.creator !== this.props.name) return;
    const { removeCard, cardId } = this.props;

    this.closePopupCard();
    removeCard(cardId);
  };

  render() {
    return (
      <PopupCard
        {...this.props}
        changeCardDescription={this.changeCardDescription}
        changeCardTitle={this.changeCardTitle}
        commentFormFocus={this.state.commentFormFocus}
        focusCommentForm={this.focusCommentForm}
        closePopupCard={this.closePopupCard}
        addComment={this.addComment}
        removeCard={this.removeCard}
        setCommentInputRef={this.setCommentInputRef}
        setRefDesc={this.setRefDesc}
        setRef={this.setRef}
        setRefComment={this.setRefComment}
        comments={this.props.comments.filter(
          comment => comment.cardId === this.props.cardId
        )}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.app.name,
  nextCommentId: state.app.nextCommentId,
  comments: state.comments
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      closePopupCard,
      removeCard,
      changeCardDescription,
      changeCardTitle,
      addComment,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(PopupCardContainer);
