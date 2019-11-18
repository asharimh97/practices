import React from "react";
import PropTypes from "prop-types";

/**
 * Functional react component for congaratulatory message.
 * @function
 * @param {object} props = React props.
 * @returns {JSX.Element} - Rendered component.
 */

const Congrats = props => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <p data-test="congrats-message">
          Congratulations! You guessed the word!
        </p>
      </div>
    );
  } else {
    return <div data-test="component-congrats"></div>;
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
