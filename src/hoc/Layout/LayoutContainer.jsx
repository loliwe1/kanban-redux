import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';

class LayoutContainer extends Component {
  render() {

    let popupCard;
    let popupCardColumn;
    if (this.props.popupId) {
      popupCard = this.props.cards.find(card => card.id === this.props.popupId);
      popupCardColumn = this.props.columns.find(
        column => column.id === popupCard.columnId
      ).title;
    }

    return (
      <Layout
        popupCardColumn={popupCardColumn}
        popupCard={popupCard}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  cards: state.cards,
  columns: state.columns,
  app: state.app,
  comments: state.app.comments,
  name: state.app.name,
  popupId: state.popupCard.id,
});

export default connect(mapStateToProps)(LayoutContainer);
