import React from "react";
import NewCardForm from "../NewCardForm/NewCardForm";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addCard } from "../../store/actions/actions";

class NewCardFormContainer extends React.Component {
  setRef = element => {
    this.input = element;
  };
  closeForm = () => {
    const { closeForm } = this.props;

    closeForm();
  };
  addCard = () => {
    const title = this.input.value;
    const { columnId, addCard, name, id } = this.props;
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

const mapStateToProps = state => ({
  cards: state.cards,
  name: state.app.name,
  id: state.app.nextCardId
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addCard
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCardFormContainer);
