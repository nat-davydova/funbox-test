import React from "react";

import styles from "./FeedPackSuptitle.module.scss";

const feedPackSuptitle = ({ children }) => (
  <div className={styles.suptitle}>
    <p>{children}</p>
  </div>
);

export default feedPackSuptitle;
