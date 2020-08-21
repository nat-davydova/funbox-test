import React from "react";
import PropTypes from "prop-types";

import styles from "./SectionHeader.module.scss";

const sectionHeader = ({ title }) => (
  <header className={styles.sectionHeader}>
    <h1 className={styles.sectionTitle}>{title}</h1>
  </header>
);

sectionHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default sectionHeader;
