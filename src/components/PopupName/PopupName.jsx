import React from 'react';
import PropTypes from 'prop-types';
import './PopupName.css';

const PopupName = ({ setRef, saveName }) => (
  <div className="PopupNameBlur">
    <div className="PopupName">
      <form action="#" method="GET">
        <h2>Your Name?</h2>
        <input ref={setRef} type="text" placeholder="Vasya" />
        <button type="button" onClick={saveName}>Save</button>
      </form>
    </div>
  </div>
);

PopupName.propTypes = {
  setRef: PropTypes.func.isRequired,
  saveName: PropTypes.func.isRequired,
};

export default PopupName;
