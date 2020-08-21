import React from "react";

import styles from "./Section.module.scss";

const section = ({ children }) => (
  <section className={styles.section}>{children}</section>
);

export default section;
