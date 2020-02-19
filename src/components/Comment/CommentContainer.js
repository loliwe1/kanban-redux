import React, { Component } from "react";
import Comment from "./Comment";
import { bindActionCreator } from "redux";
import { connect } from "react-redux";

class CommentContainer extends Component {
  state = {
    redactComment: false,
    commentText: ""
  };

  redactComment = () => {
    if (this.props.name !== this.props.author) return;
    this.setState({
      changeComment: true,
      commentText: this.props.commentText
    });
  };

  changeComment = event => {
    this.setState({ commentText: event.target.value });
  };

  saveChangesComment = () => {
    if (!this.state.commentText) return;

    const { commentText } = this.state;
    const { saveChangesComment, id } = this.props;

    saveChangesComment({ commentText, id });
    this.setState({ changeComment: false });
  };

  deleteComment = () => {
    if (this.props.name !== this.props.author) return;
    const { deleteComment, id } = this.props;

    deleteComment({ id });
  };
  render() {
    return (
      <Comment
        commentText={this.commentText}
        changeComment={this.changeComment}
        saveChangesComment={this.saveChangesComment}
        {...this.props}
      />
    );
  }
}

export default connect()(CommentContainer);
