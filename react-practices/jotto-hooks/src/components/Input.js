import React from "react";
import PropTypes from "prop-types";

const Input = ({ secretWord, ...props }) => {
  return <div secretWord={secretWord} data-test="input-component" />;
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
};

export default Input;
