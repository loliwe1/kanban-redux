import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Column from "./Column";
import { changeTitleColumn } from "../../store/actions/actions";

class ColumnContainer extends React.Component {
  state = {
    isOpen: false
  };

  changeTitleColumn = () => {
    const { changeTitleColumn, id } = this.props;
    const value = this.textInput.textContent;

    changeTitleColumn(value, id);
    console.log(value);
    console.log(id);
  };

  setRef = element => {
    this.textInput = element;
  };

  openForm = () => {
    this.setState({ isOpen: true });
  };

  closeForm = () => {
    this.setState({ isOpen: false });
  };

  render() {
    console.log(this.props);
    return (
      <Column
        isOpen={this.state.isOpen}
        openForm={this.openForm}
        closeForm={this.closeForm}
        setRef={this.setRef}
        changeTitleColumn={this.changeTitleColumn}
        title={this.props.title}
      />
    );
  }
}

const mapStateToProps = state => ({
  columns: state.columns
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeTitleColumn
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ColumnContainer);
