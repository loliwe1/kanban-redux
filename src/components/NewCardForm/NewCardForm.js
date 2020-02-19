import React from "react";
import "./NewCardForm.css";

const NewCardForm = props => (
  <div className="NewCardForm">
    <input
      autoFocus
      className="NewCardFormTextarea"
      placeholder="Enter card title"
      ref={props.setRef}
    />
    <button onClick={props.addCard} className="AddCardButton">
      Add Card
    </button>
    <button onClick={props.closeForm} className="CloseCreateButton">
      Close
    </button>
  </div>
);

export default NewCardForm;
