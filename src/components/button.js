import React from "react";

function Button(props) {
  return (
    <div>
      <button onClick={props.onClick}>{props.buttonTitle}</button>
    </div>
  );
}

export default Button;
