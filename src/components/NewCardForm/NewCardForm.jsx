import React from 'react';
import PropTypes from 'prop-types'
import './NewCardForm.css';

const NewCardForm = ({ setRef, addCard, closeForm }) => (
  <div className="NewCardForm">
    <input
      className="NewCardFormTextarea"
      placeholder="Enter card title"
      ref={setRef}
    />
    <button onClick={addCard} type="button" className="AddCardButton">
      Add Card
    </button>
    <button onClick={closeForm} type="button" className="CloseCreateButton">
      Close
    </button>
  </div>
);

NewCardForm.propTypes = {
  setRef: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired,
};

export default NewCardForm;
