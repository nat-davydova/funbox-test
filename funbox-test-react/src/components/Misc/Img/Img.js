import React from "react";
import PropTypes from "prop-types";

const img = ({ img, alt, classes = "" }) => {
  const { root = "", imgClass = "" } = classes;

  return (
    <div className={root}>
      <img className={imgClass} src={img} alt={alt} />
    </div>
  );
};

img.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string,
  classes: PropTypes.object
};

export default img;
