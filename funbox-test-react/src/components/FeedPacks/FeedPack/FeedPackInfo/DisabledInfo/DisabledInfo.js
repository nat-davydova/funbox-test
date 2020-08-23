import React from "react";

import styles from "./DisabledInfo.module.scss";

const disabledInfo = ({ type }) => (
  <p className={styles.disabled}>Печалька, {type} закончился</p>
);

export default disabledInfo;
