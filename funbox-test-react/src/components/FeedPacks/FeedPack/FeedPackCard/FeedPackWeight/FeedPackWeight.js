import React from "react";

import styles from "./FeedPackWeight.module.scss";

const feedPackWeight = ({ weightInfo }) => {
  const { weight, units } = weightInfo;

  const transformedWeight = weight
    .toString()
    .split(".")
    .join(",");

  return (
    <div className={styles.weight}>
      <span className={styles.weight_num}>{transformedWeight}</span>
      <span className={styles.weight_units}>{units}</span>
    </div>
  );
};

export default feedPackWeight;
