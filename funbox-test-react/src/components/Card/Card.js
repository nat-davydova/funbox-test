import React from "react";
import classnames from "classnames";

import styles from "./Card.module.scss";

const card = ({ isAngled = "false", classes = "", children }) => {
  const { root, inner } = classes;

  console.log(classes);

  const cardClassnames = classnames(styles.card, root, {
    [styles.cardIsAngled]: isAngled
  });

  const cardInnerClassnames = classnames(inner, {
    [styles.cardIsAngled_inner]: isAngled
  });

  return (
    <div className={cardClassnames}>
      <div className={cardInnerClassnames}>{children}</div>
    </div>
  );
};

export default card;