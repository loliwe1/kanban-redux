import React, { Component } from 'react';
import Comment from './Comment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeComment } from '../../store/actions/actions';
import { saveComment } from '../../store/actions/actions';

class CommentContainer extends Component {
  state = {
    redactComment: false,
    commentText: ""
  };

  redact = () => {
    if (this.props.name !== this.props.author) return;
    this.setState({
      redactComment: true,
      commentText: this.props.textComment
    });
  };

  setRef = element => {
    this.inputText = element;
  };

  saveComment = () => {
    if (!this.inputText.value) {
      this.setState({ redactComment: false });
      return;
    }
    const { saveComment, id } = this.props;

    saveComment(id, this.inputText.value);
    this.setState({ redactComment: false });
  };

  removeComment = () => {
    if (this.props.name !== this.props.author) return;
    const { removeComment, id } = this.props;

    removeComment(id);
  };
  render() {
    return (
      <Comment
        {...this.props}
        removeComment={this.removeComment}
        redactComment={this.state.redactComment}
        redact={this.redact}
        commentText={this.state.commentText}
        saveComment={this.saveComment}
        setRef={this.setRef}
      />
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  removeComment,
  saveComment,
}, dispatch);

export default connect(null, mapDispatchToProps)(CommentContainer);
