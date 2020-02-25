import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Column from './Column';
import { changeTitleColumn } from '../../store/actions/actions';

class ColumnContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  changeTitleColumn = () => {
    const { changeTitleColumn, id } = this.props;
    const value = this.textInput.textContent;

    changeTitleColumn(value, id);
  };

  setRef = (element) => {
    this.textInput = element;
  };

  openForm = () => {
    this.setState({ isOpen: true });
  };

  closeForm = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const {
      id,
      comments,
      cards,
      title,
    } = this.props;
    const { isOpen } = this.state;
    return (
      <Column
        comments={comments}
        cards={cards.filter((card) => card.columnId === id)}
        renderCards={this.renderCards}
        columnId={id}
        isOpen={isOpen}
        openForm={this.openForm}
        closeForm={this.closeForm}
        setRef={this.setRef}
        changeTitleColumn={this.changeTitleColumn}
        title={title}
      />
    );
  }
}
const mapStateToProps = (state) => ({
  comments: state.comments,
  cards: state.cards,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeTitleColumn,
}, dispatch);

ColumnContainer.propTypes = {
  changeTitleColumn: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  cards: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  title: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ColumnContainer);
