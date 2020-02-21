import React, { Component } from 'react';
import { connect } from 'react-redux';
import PopupCard from './PopupCard';
import { bindActionCreators } from 'redux';
import { closePopupCard } from '../../store/actions/actions';
import { removeCard } from '../../store/actions/actions';
import { changeCardDescription } from '../../store/actions/actions';
import { changeCardTitle } from '../../store/actions/actions';
import { addComment } from '../../store/actions/actions';

class PopupCardContainer extends Component {
  state = {
    commentFormFocus: false
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

  setRef = element => {
    this.textInput = element;
  };

  setRefDesc = element => {
    this.textInputDesc = element;
  };

  changeCardDescription = () => {
    const value = this.textInputDesc.textContent;
    const { changeCardDescription, cardId } = this.props;
    changeCardDescription(cardId, value);
  };

  setRefComment = element => {
    this.commentInput = element;
  };

  addComment = () => {
    const value = this.commentInput.value;
    if (!value) return;
    const { addComment, nextCommentId, name } = this.props;

    addComment(value, nextCommentId, name, this.props.cardId);
    this.commentInput.value = "";
    this.setState({ commentFormFocus: false });
  };

  removeCard = () => {
    if (this.props.creator !== this.props.name) return;
    const { removeCard, cardId } = this.props;

    this.closePopupCard();
    removeCard(cardId);
  };

  componentDidMount() {
    window.addEventListener("keydown", this.closePopupOnEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closePopupOnEsc);
  }

  closePopupOnEsc = e => {
    if (e.key === "Escape") {
      this.closePopupCard();
    }
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

const mapStateToProps = state => ({
  name: state.app.name,
  nextCommentId: state.app.nextCommentId,
  comments: state.comments
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      closePopupCard,
      removeCard,
      changeCardDescription,
      changeCardTitle,
      addComment
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PopupCardContainer);
