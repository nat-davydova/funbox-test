import React from "react";

import Card from "components/Card/Card";
import FeedPackSuptitle from "./FeedPackSuptitle/FeedPackSuptitle";
import FeedPackTitle from "./FeedPackTitle/FeedPackTitle";
import FeedPackSubtitle from "./FeedPackSubtitle/FeedPackSubtitle";
import FeedPackFeatures from "./FeedPackFeatures/FeedPackFeatures";
import FeedPackImg from "./FeedPackImg/FeedPackImg";

import styles from "./FeedPackCard.module.scss";

const feedPackCard = ({ classes = "", config }) => {
  const { suptitle, title, type, features, imgInfo } = config;

  return (
    <Card
      isAngled
      classes={{
        root: styles.feedPack_card,
        content: styles.feedPack_content
      }}
    >
      <FeedPackSuptitle>{suptitle}</FeedPackSuptitle>
      <FeedPackTitle>{title}</FeedPackTitle>
      <FeedPackSubtitle>{type}</FeedPackSubtitle>
      <FeedPackFeatures features={features} />
      <FeedPackImg imgInfo={imgInfo} />
    </Card>
  );
};

export default feedPackCard;
