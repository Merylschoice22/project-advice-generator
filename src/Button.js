import React from "react";

const Button = (props) => {
  return (
    <button className="advice-button" onClick={props.getAdvice}>
      Click for Advice
    </button>
  );
};

export default Button;
