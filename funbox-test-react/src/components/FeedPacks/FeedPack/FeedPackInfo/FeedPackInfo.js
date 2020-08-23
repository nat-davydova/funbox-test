import React from "react";

import CTAInfo from "./CTAInfo/CTAInfo";

const feedPackInfo = ({ config }) => {
  const { type, isChecked, isDisabled } = config;

  let infoComponentToRender;

  if (!isChecked || !isDisabled) {
    infoComponentToRender = <CTAInfo />;
  }

  return <div>{infoComponentToRender}</div>;
};

export default feedPackInfo;
