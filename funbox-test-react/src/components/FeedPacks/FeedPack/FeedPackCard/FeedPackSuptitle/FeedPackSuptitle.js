import React from "react";
import PropTypes from "prop-types";

import styles from "./FeedPackSuptitle.module.scss";

const feedPackSuptitle = ({ children }) => (
  <div className={styles.suptitle}>
    <p>{children}</p>
  </div>
);

feedPackSuptitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired
  ])
};

export default feedPackSuptitle;
