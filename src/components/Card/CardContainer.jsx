import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openPopupCard } from '../../store/actions/actions';
import Card from './Card';


class CardContainer extends Component {
    openPopupCard = () => {
      const { id, openPopupCard } = this.props;
      openPopupCard(id);
    }

    render() {
      const { title, commentsLength } = this.props;
      return (
        <Card
          title={title}
          openPopupCard={this.openPopupCard}
          commentsLength={commentsLength}
        />
      );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  openPopupCard,
}, dispatch);

CardContainer.propTypes = {
  id: PropTypes.number.isRequired,
  openPopupCard: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  commentsLength: PropTypes.number.isRequired,
};

export default connect(null, mapDispatchToProps)(CardContainer);
