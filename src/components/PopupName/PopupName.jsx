import React from 'react';
import './PopupName.css';

const PopupName = ({ setRef, saveName }) => (
  <div className="PopupNameBlur">
    <div className="PopupName">
      <form action="#" method="GET">
        <h2>Your Name?</h2>
        <input ref={setRef} type="text" placeholder="Vasya" autoFocus />
        <button type="button" onClick={saveName}>Save</button>
      </form>
    </div>
  </div>
);

export default PopupName;
