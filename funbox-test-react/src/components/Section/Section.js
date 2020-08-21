import React from "react";
import PropTypes from "prop-types";

import SectionHeader from "./SectionHeader/SectionHeader";
import Container from "components/Misc/Container/Container";

import styles from "./Section.module.scss";

const section = ({ title, children }) => (
  <section className={styles.section}>
    <Container>
      <SectionHeader title={title} />
      <div className="section__content">{children}</div>
    </Container>
  </section>
);

section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired
};

export default section;
