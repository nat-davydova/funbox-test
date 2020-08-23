import React from "react";

import CTAInfo from "./CTAInfo/CTAInfo";
import CheckedInfo from "./CheckedInfo/CheckedInfo";

import styles from "./FeedPackInfo.module.scss";

const feedPackInfo = ({ config }) => {
  const { descr, isChecked, isDisabled } = config;

  let infoComponentToRender;

  if (!isChecked && !isDisabled) {
    infoComponentToRender = <CTAInfo />;
  } else if (isChecked && !isDisabled) {
    infoComponentToRender = <CheckedInfo descr={descr} />;
  }

  return <div className={styles.info}>{infoComponentToRender}</div>;
};

export default feedPackInfo;
