import React, { useState } from "react";
import "./App.css";

export default function ToggleVisibility({ children }) {

  const [show, setShow] = useState(false);
  function toggleShow() {
    setShow((prevShow) => !prevShow)
  }

  var buttonText = show ? "Hide Detailed Positions" : "Show Detailed Positions";
  
  return (
    <div className="center-button2">
        <button onClick={toggleShow} className="center-button">{buttonText}</button>
        <div className={show ? "reveal" : "hidden"}>
          {children}
        </div>
    </div>
  );
}