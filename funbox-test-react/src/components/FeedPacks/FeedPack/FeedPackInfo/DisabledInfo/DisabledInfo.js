import React from "react";
import PropTypes from "prop-types";

import styles from "./DisabledInfo.module.scss";

const disabledInfo = ({ type }) => (
  <p className={styles.disabled}>Печалька, {type} закончился</p>
);

disabledInfo.propTypes = {
  type: PropTypes.string.isRequired
};

export default disabledInfo;
