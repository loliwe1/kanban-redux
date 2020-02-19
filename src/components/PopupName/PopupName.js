import React from "react";
import "./PopupName.css";

const PopupName = props => (
  <div className="PopupNameBlur">
    <div className="PopupName">
      <form action="#" method="GET">
        <h2>Your Name?</h2>
        <input ref={props.setRef} type="text" placeholder="Vasya" autoFocus />
        <button onClick={props.saveName}>Save</button>
      </form>
    </div>
  </div>
);

export default PopupName;
