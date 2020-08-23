import React from "react";
import PropTypes from "prop-types";

import Card from "components/Card/Card";
import FeedPackSuptitle from "./FeedPackSuptitle/FeedPackSuptitle";
import FeedPackTitle from "./FeedPackTitle/FeedPackTitle";
import FeedPackSubtitle from "./FeedPackSubtitle/FeedPackSubtitle";
import FeedPackFeatures from "./FeedPackFeatures/FeedPackFeatures";
import FeedPackImg from "./FeedPackImg/FeedPackImg";
import FeedPackWeight from "./FeedPackWeight/FeedPackWeight";

import styles from "./FeedPackCard.module.scss";

const feedPackCard = ({ classes = "", config }) => {
  const {
    suptitle,
    title,
    type,
    features,
    imgInfo,
    weightInfo,
    isPicked,
    isDisabled
  } = config;

  return (
    <Card
      isAngled
      classes={{
        root: styles.card,
        content: styles.content,
        isPicked: isPicked ? styles.isPicked : "",
        isDisabled: isDisabled ? styles.isDisabled : ""
      }}
    >
      <FeedPackSuptitle>{suptitle}</FeedPackSuptitle>
      <FeedPackTitle>{title}</FeedPackTitle>
      <FeedPackSubtitle>{type}</FeedPackSubtitle>
      <FeedPackFeatures features={features} />
      <FeedPackImg imgInfo={imgInfo} />
      <FeedPackWeight
        classes={{
          root: styles.weight
        }}
        weightInfo={weightInfo}
      />
    </Card>
  );
};

feedPackCard.propTypes = {
  classes: PropTypes.object,
  config: PropTypes.object.isRequired
};

export default feedPackCard;
