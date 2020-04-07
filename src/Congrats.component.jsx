import React from "react";
import PropTypes from "prop-types";

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

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
