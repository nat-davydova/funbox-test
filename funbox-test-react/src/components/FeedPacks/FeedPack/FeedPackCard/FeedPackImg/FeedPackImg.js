import React from "react";

import Img from "components/Misc/Img/Img";

import styles from "./FeedPackImg.module.scss";

const feedPackImg = ({ imgInfo }) => {
  const { img, alt } = imgInfo;

  return (
    <Img
      classes={{
        root: styles.img
      }}
      img={img}
      alt={alt}
    />
  );
};

export default feedPackImg;
