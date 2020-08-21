import React from "react";

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

export default section;
