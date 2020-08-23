import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const img = ({ img, alt, classes = "" }) => {
  const { root = "", isDisabled = "" } = classes;

  const imgClassnames = classnames(root, isDisabled);

  return (
    <div className={imgClassnames}>
      <img src={img} alt={alt} />
    </div>
  );
};

img.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string,
  classes: PropTypes.object
};

export default img;
