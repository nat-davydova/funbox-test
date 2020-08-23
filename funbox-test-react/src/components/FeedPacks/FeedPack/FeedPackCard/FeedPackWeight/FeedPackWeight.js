import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./FeedPackWeight.module.scss";

const feedPackWeight = ({ classes = "", weightInfo }) => {
  const { root = "" } = classes;
  const { weight, units } = weightInfo;

  const weightClassnames = classnames(root, styles.weight);

  const transformedWeight = weight
    .toString()
    .split(".")
    .join(",");

  return (
    <div className={weightClassnames}>
      <span className={styles.weight_num}>{transformedWeight}</span>
      <span className={styles.weight_units}>{units}</span>
    </div>
  );
};

feedPackWeight.propTypes = {
  weightInfo: PropTypes.object.isRequired
};

export default feedPackWeight;
