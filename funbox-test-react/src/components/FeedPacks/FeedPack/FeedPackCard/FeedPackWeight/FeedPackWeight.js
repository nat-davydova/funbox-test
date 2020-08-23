import React from "react";

const feedPackWeight = ({ weightInfo }) => {
  const { weight, units } = weightInfo;

  return (
    <div>
      <span>{weight}</span>
      <span>{units}</span>
    </div>
  );
};

export default feedPackWeight;
