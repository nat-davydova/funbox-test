import React from "react";
import PropTypes from "prop-types";

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

feedPackImg.propTypes = {
  imgInfo: PropTypes.object.isRequired
};

export default feedPackImg;
