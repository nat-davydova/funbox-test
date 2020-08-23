import React from "react";

import Card from "components/Card/Card";
import FeedPackSuptitle from "./FeedPackSuptitle/FeedPackSuptitle";

import styles from "./FeedPackCard.module.scss";

const feedPackCard = ({ classes = "", config }) => {
  const { suptitle } = config;

  return (
    <Card
      isAngled
      classes={{
        root: styles.feedPack_card,
        content: styles.feedPack_content
      }}
    >
      <FeedPackSuptitle>{suptitle}</FeedPackSuptitle>
    </Card>
  );
};

export default feedPackCard;
