import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Comment from './Comment';
import { removeComment, saveComment } from '../../store/actions/actions';

class CommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { redactComment: false };
  }

  redact = () => {
    const { name, author } = this.props;
    if (name !== author) return;
    this.setState({
      redactComment: true,
    });
  };

  setRef = (element) => {
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
    const { name, author } = this.props;
    if (name !== author) return;
    const { removeComment, id } = this.props;

    removeComment(id);
  };

  render() {
    const { author, textComment } = this.props;
    const { redactComment } = this.state;
    return (
      <Comment
        removeComment={this.removeComment}
        redactComment={redactComment}
        redact={this.redact}
        saveComment={this.saveComment}
        setRef={this.setRef}
        author={author}
        textComment={textComment}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  removeComment,
  saveComment,
}, dispatch);

CommentContainer.propTypes = {
  removeComment: PropTypes.func.isRequired,
  saveComment: PropTypes.func.isRequired,
  textComment: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default connect(null, mapDispatchToProps)(CommentContainer);
