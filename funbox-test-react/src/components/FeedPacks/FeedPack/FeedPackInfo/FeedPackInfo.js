import React from "react";
import PropTypes from "prop-types";

import CTAInfo from "./CTAInfo/CTAInfo";
import PickedInfo from "./PickedInfo/PickedInfo";
import DisabledInfo from "./DisabledInfo/DisabledInfo";

import styles from "./FeedPackInfo.module.scss";

const feedPackInfo = ({ config }) => {
  const { type, descr, isPicked, isDisabled } = config;

  let infoComponentToRender;

  if (!isPicked && !isDisabled) {
    infoComponentToRender = <CTAInfo />;
  } else if (isPicked && !isDisabled) {
    infoComponentToRender = <PickedInfo descr={descr} />;
  } else if (isDisabled) {
    infoComponentToRender = <DisabledInfo type={type} />;
  }

  return <div className={styles.info}>{infoComponentToRender}</div>;
};

feedPackInfo.propTypes = {
  config: PropTypes.object.isRequired
};

export default feedPackInfo;
