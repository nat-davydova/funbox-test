import React from "react";

import Button from "components/Misc/Button/Button";

import styles from "./CTAInfo.module.scss";

const ctaInfo = ({ clicked }) => (
  <p>
    Чего сидишь? Порадуй котэ,
    <Button
      classes={{
        root: styles.ctaInfo_btn
      }}
      clicked={clicked}
    >
      купи
    </Button>
  </p>
);

export default ctaInfo;
