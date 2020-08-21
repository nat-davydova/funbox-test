import React from "react";

import styles from "./SectionHeader.module.scss";

const sectionHeader = ({ title }) => (
  <header className={styles.sectionHeader}>
    <h1 className={styles.sectionTitle}>{title}</h1>
  </header>
);

export default sectionHeader;
