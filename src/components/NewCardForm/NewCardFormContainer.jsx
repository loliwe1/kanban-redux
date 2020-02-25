import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NewCardForm from './NewCardForm';
import { addCard } from '../../store/actions/actions';

class NewCardFormContainer extends React.Component {
  setRef = (element) => {
    this.input = element;
  };

  closeForm = () => {
    const { closeForm } = this.props;

    closeForm();
  };

  addCard = () => {
    if (!this.input.value) return;
    const title = this.input.value;
    const {
      columnId,
      addCard,
      name,
      id,
    } = this.props;
    addCard(title, columnId, name, id);
    this.closeForm();
  };

  render() {
    return (
      <NewCardForm
        closeForm={this.closeForm}
        addCard={this.addCard}
        setRef={this.setRef}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.app.name,
  id: state.app.nextCardId,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addCard,
}, dispatch);

NewCardFormContainer.propTypes = {
  closeForm: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  addCard: PropTypes.func.isRequired,
  columnId: PropTypes.number.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCardFormContainer);
