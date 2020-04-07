import React from "react";

const Congrats = props => {
  return props.success ? (
    <div id="component-congrats">
      <span id="congrats-message">
        Congratulation!!! You guessed the right word.
      </span>
    </div>
  ) : (
    <div id="component-congrats" />
  );
};

export default Congrats;
