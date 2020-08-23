import React from "react";
import PropTypes from "prop-types";

import styles from "./FeedPackTitle.module.scss";

const feedPackTitle = ({ children }) => (
  <h2 className={styles.title}>{children}</h2>
);

feedPackTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired
  ])
};

export default feedPackTitle;
