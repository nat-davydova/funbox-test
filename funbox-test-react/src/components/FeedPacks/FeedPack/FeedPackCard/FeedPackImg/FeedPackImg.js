import React from "react";
import PropTypes from "prop-types";

import Img from "components/Misc/Img/Img";

import styles from "./FeedPackImg.module.scss";

const feedPackImg = ({ isDisabled, imgInfo }) => {
  const { img, alt } = imgInfo;

  return (
    <Img
      classes={{
        root: styles.img,
        isDisabled: isDisabled ? styles.isDisabled : null
      }}
      img={img}
      alt={alt}
    />
  );
};

feedPackImg.propTypes = {
  imgInfo: PropTypes.object.isRequired,
  isDisabled: PropTypes.bool
};

export default feedPackImg;
