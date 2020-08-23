import React from "react";
import classnames from "classnames";

import styles from "./Card.module.scss";

const card = ({ isAngled = "false", classes = "", children }) => {
  const { root } = classes;

  console.log(classes);

  const cardClassnames = classnames(styles.card, root, {
    [styles.cardIsAngled]: isAngled
  });

  return <div className={cardClassnames}>{children}</div>;
};

export default card;
