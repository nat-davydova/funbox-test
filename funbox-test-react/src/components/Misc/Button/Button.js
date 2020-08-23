import React from "react";
import PropTypes from "prop-types";

const button = ({ classes = "", children }) => {
  const { root = "" } = classes;

  return (
    <button className={root}>
      <span>{children}</span>
    </button>
  );
};

button.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.string.isRequired
};

export default button;
