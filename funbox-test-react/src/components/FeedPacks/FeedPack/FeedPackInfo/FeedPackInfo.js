import React from "react";
import PropTypes from "prop-types";

import CTAInfo from "./CTAInfo/CTAInfo";
import PickedInfo from "./PickedInfo/PickedInfo";
import DisabledInfo from "./DisabledInfo/DisabledInfo";

import styles from "./FeedPackInfo.module.scss";

const feedPackInfo = ({ config, clicked }) => {
  const { type, descr, isPicked, isDisabled, id } = config;

  let infoComponentToRender;

  if (!isPicked && !isDisabled) {
    infoComponentToRender = <CTAInfo clicked={() => clicked(id)} />;
  } else if (isPicked && !isDisabled) {
    infoComponentToRender = <PickedInfo descr={descr} />;
  } else if (isDisabled) {
    infoComponentToRender = <DisabledInfo type={type} />;
  }

  return <div className={styles.info}>{infoComponentToRender}</div>;
};

feedPackInfo.propTypes = {
  config: PropTypes.object.isRequired,
  clicked: PropTypes.func.isRequired
};

export default feedPackInfo;
