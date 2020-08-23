import React from "react";

import styles from "./FeedPackFeature.module.scss";

const feedPackFeature = ({ val = "", descr }) => (
  <li className={styles.feature}>
    {val && <strong>{val}</strong>}
    {descr}
  </li>
);

export default feedPackFeature;
