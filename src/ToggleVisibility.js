import React, { useState } from "react";
import "./App.css";

export default function ToggleVisibility({ children }) {

  // React state to manage visibility
  const [show, setShow] = useState();

  // function to toggle the boolean value
  function toggleShow() {
    setShow(!show);
  }
  var buttonText = show ? "Hide Detailed Positions" : "Show Detailed Positions";

  return (
    <div className="center-button2">
        <button onClick={toggleShow} className="center-button">{buttonText}</button>
      {show && children}
    </div>
  );
}