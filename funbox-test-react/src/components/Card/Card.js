import React from "react";
import classnames from "classnames";

import styles from "./Card.module.scss";

const card = ({ isAngled = "false", children }) => {
  const cardClassnames = classnames(styles.card, {
    [styles.cardIsAngled]: isAngled
  });

  return <div className={cardClassnames}>{children}</div>;
};

export default card;
