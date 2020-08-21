import React from "react";

import Container from "components/Misc/Container/Container";

import styles from "./Section.module.scss";

const section = ({ children }) => (
  <section className={styles.section}>
    <Container>
      <div className="section__content">{children}</div>
    </Container>
  </section>
);

export default section;
