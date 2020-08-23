import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./FeedPackTitle.module.scss";

const feedPackTitle = ({ isDisabled, children }) => {
  const titleClassnames = classnames(styles.title, {
    [styles.isDisabled]: isDisabled
  });

  return <h2 className={titleClassnames}>{children}</h2>;
};

feedPackTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired
  ]),
  isDisabled: PropTypes.bool
};

export default feedPackTitle;
