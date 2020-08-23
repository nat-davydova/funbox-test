import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import styles from "./Card.module.scss";

const card = ({ isAngled = false, classes = "", children }) => {
  const { root = "", content = "", isPicked = "", isDisabled = "" } = classes;
  const cardClassnames = classnames(styles.card, root, isPicked, isDisabled, {
    [styles.cardIsAngled]: isAngled
  });

  const cardInnerClassnames = classnames(content, {
    [styles.cardIsAngled_inner]: isAngled
  });

  return (
    <div className={cardClassnames}>
      <div className={cardInnerClassnames}>{children}</div>
    </div>
  );
};

card.propTypes = {
  isAngled: PropTypes.bool,
  classes: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired
  ])
};

export default card;
