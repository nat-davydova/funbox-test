import React from "react";

import Card from "components/Card/Card";

import styles from "./FeedPackCard.module.scss";

const feedPackCard = ({ classes = "" }) => (
  <Card
    isAngled
    classes={{
      root: styles.feedPack_card,
      content: styles.feedPack_content
    }}
  ></Card>
);

export default feedPackCard;
