import React from "react";

import styles from "./FeedPackFeatures.module.scss";

const feedPackFeatures = ({ features }) => {
  const featuresArr = features.map(elem => {
    console.log(elem);
    return elem.descr;
  });

  return <ul className={styles.features}>{featuresArr}</ul>;
};

export default feedPackFeatures;
