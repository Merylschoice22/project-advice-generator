import React from "react";
// import Button from "./Button"

const Card = (props) => {
  return (
    <div className="advice-display">
      <h2>Welcome!</h2>
      <p id="welcome-message">Click the button and you will get new advice.</p>
      <p>{props.advice}</p>
    </div>
  );
};

export default Card;
