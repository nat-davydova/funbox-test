import React from "react";
import PropTypes from "prop-types";

import styles from "./FeedPackSubtitle.module.scss";

const feedPackSubtitle = ({ children }) => (
  <p className={styles.subtitle}>{children}</p>
);

feedPackSubtitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired
  ])
};

export default feedPackSubtitle;
