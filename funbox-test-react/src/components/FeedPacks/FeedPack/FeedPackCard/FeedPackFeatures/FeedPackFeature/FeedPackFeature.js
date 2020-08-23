import React from "react";
import PropTypes from "prop-types";

import styles from "./FeedPackFeature.module.scss";

const feedPackFeature = ({ val = "", descr }) => (
  <li className={styles.feature}>
    {val && <strong>{val}</strong>}
    {descr}
  </li>
);

feedPackFeature.propTypes = {
  val: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  descr: PropTypes.string.isRequired
};

export default feedPackFeature;
