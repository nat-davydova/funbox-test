import React from "react";
import { v4 as uuid } from "uuid";
import classnames from "classnames";
import PropTypes from "prop-types";

import FeedPackFeature from "./FeedPackFeature/FeedPackFeature";

import styles from "./FeedPackFeatures.module.scss";

const feedPackFeatures = ({ isDisabled, features }) => {
  const featuresClassnames = classnames(styles.features, {
    [styles.isDisabled]: isDisabled
  });

  const featuresArr = features.map(({ val, descr }) => {
    return <FeedPackFeature key={uuid()} val={val} descr={descr} />;
  });

  return <ul className={featuresClassnames}>{featuresArr}</ul>;
};

feedPackFeatures.propTypes = {
  features: PropTypes.array.isRequired,
  isDisabled: PropTypes.bool
};

export default feedPackFeatures;
