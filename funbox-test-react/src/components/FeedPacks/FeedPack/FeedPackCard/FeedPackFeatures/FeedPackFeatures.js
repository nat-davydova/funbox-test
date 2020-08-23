import React from "react";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";

import FeedPackFeature from "./FeedPackFeature/FeedPackFeature";

import styles from "./FeedPackFeatures.module.scss";

const feedPackFeatures = ({ features }) => {
  const featuresArr = features.map(({ val, descr }) => {
    return <FeedPackFeature key={uuid()} val={val} descr={descr} />;
  });

  return <ul className={styles.features}>{featuresArr}</ul>;
};

export default feedPackFeatures;
