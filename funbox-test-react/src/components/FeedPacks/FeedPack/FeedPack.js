import React from "react";
import classnames from "classnames";

import Card from "components/Card/Card";

import styles from "./FeedPack.module.scss";

const feedPack = ({ classes = "" }) => {
  const { root } = classes;

  const packClassnames = classnames("feed-pack", root);

  return (
    <article className={packClassnames}>
      <Card
        isAngled
        classes={{
          root: styles.card
        }}
      ></Card>
    </article>
  );
};

export default feedPack;
