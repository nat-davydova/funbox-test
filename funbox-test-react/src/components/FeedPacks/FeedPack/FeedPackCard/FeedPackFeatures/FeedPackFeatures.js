import React from "react";

import FeedPackFeature from "./FeedPackFeature/FeedPackFeature";

import styles from "./FeedPackFeatures.module.scss";

const feedPackFeatures = ({ features }) => {
  const featuresArr = features.map(({ val, descr }) => {
    console.log(val, descr);
    return <FeedPackFeature val={val} descr={descr} />;
  });

  return <ul className={styles.features}>{featuresArr}</ul>;
};

export default feedPackFeatures;
