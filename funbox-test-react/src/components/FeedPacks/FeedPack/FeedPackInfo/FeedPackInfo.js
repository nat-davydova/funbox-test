import React from "react";

import CTAInfo from "./CTAInfo/CTAInfo";

import styles from "./FeedPackInfo.module.scss";

const feedPackInfo = ({ config }) => {
  const { type, isChecked, isDisabled } = config;

  let infoComponentToRender;

  if (!isChecked || !isDisabled) {
    infoComponentToRender = <CTAInfo />;
  }

  return <div className={styles.info}>{infoComponentToRender}</div>;
};

export default feedPackInfo;
