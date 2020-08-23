import React from "react";

import styles from "./FeedPackTitle.module.scss";

const feedPackTitle = ({ children }) => (
  <h2 className={styles.title}>{children}</h2>
);

export default feedPackTitle;
