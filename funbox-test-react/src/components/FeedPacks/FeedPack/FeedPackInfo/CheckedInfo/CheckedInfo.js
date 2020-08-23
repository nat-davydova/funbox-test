import React from "react";
import PropTypes from "prop-types";

const checkedInfo = ({ descr }) => <p>{descr}</p>;

checkedInfo.propTypes = {
  descr: PropTypes.string.isRequired
};

export default checkedInfo;
