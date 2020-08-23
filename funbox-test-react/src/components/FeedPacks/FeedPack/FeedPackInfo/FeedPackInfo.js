import React from "react";
import PropTypes from "prop-types";

import CTAInfo from "./CTAInfo/CTAInfo";
import CheckedInfo from "./CheckedInfo/CheckedInfo";
import DisabledInfo from "./DisabledInfo/DisabledInfo";

import styles from "./FeedPackInfo.module.scss";

const feedPackInfo = ({ config }) => {
  const { type, descr, isChecked, isDisabled } = config;

  let infoComponentToRender;

  if (!isChecked && !isDisabled) {
    infoComponentToRender = <CTAInfo />;
  } else if (isChecked && !isDisabled) {
    infoComponentToRender = <CheckedInfo descr={descr} />;
  } else if (isDisabled) {
    infoComponentToRender = <DisabledInfo type={type} />;
  }

  return <div className={styles.info}>{infoComponentToRender}</div>;
};

feedPackInfo.propTypes = {
  config: PropTypes.object.isRequired
};

export default feedPackInfo;
