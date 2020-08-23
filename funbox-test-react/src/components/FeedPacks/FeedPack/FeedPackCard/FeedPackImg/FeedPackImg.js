import React from "react";

import Img from "components/Misc/Img/Img";

const feedPackImg = ({ imgInfo }) => {
  const { img, alt } = imgInfo;

  return <Img img={img} alt={alt} />;
};

export default feedPackImg;
