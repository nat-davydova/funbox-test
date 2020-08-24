import React from "react";
import PropTypes from "prop-types";

const button = ({ classes = "", children, clicked }) => {
  const { root = "" } = classes;

  return (
    <button className={root} onClick={clicked}>
      <span>{children}</span>
    </button>
  );
};

button.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.string.isRequired
};

export default button;
