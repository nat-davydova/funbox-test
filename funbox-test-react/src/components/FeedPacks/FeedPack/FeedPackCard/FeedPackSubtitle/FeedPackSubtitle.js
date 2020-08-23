import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./FeedPackSubtitle.module.scss";

const feedPackSubtitle = ({ isDisabled, children }) => {
  const subtitleClassnames = classnames(styles.subtitle, {
    [styles.isDisabled]: isDisabled
  });

  return <p className={subtitleClassnames}>{children}</p>;
};

feedPackSubtitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired
  ]),
  isDisabled: PropTypes.bool
};

export default feedPackSubtitle;
