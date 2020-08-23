import React from "react";

import styles from "./FeedPackSubtitle.module.scss";

const feedPackSubtitle = ({ children }) => (
  <p className={styles.subtitle}>{children}</p>
);

export default feedPackSubtitle;
