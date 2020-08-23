import React from "react";
import PropTypes from "prop-types";

const pickedInfo = ({ descr }) => <p>{descr}</p>;

pickedInfo.propTypes = {
  descr: PropTypes.string.isRequired
};

export default pickedInfo;
