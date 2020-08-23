import React from "react";

const img = ({ img, alt, classes = "" }) => {
  const { root = "", imgClass = "" } = classes;

  return (
    <div className={root}>
      <img className={imgClass} src={img} alt={alt} />
    </div>
  );
};

export default img;
