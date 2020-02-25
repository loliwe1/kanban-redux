import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PopupName from './PopupName';
import { saveName } from '../../store/actions/actions';

class PopupNameContainer extends Component {
  setRef = (element) => {
    this.input = element;
  };

  saveName = () => {
    const { saveName } = this.props;
    saveName(this.input.value);
  };

  render() {
    return <PopupName setRef={this.setRef} saveName={this.saveName} />;
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  saveName,
}, dispatch);

PopupNameContainer.propTypes = {
  saveName: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(PopupNameContainer);
