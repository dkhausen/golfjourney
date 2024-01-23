import React, { useState } from "react";

export default function ToggleVisibility({ children }) {

  // React state to manage visibility
  const [show, setShow] = useState();

  // function to toggle the boolean value
  function toggleShow() {
    setShow(!show);
  }
  var buttonText = show ? "Hide Positions" : "Show Positions";

  return (
    <div className="center-button">
        <button onClick={toggleShow}>{buttonText}</button>
      {show && children}
    </div>
  );
}