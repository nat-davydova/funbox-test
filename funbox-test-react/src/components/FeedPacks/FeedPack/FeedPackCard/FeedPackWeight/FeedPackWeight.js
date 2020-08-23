import React from "react";

const feedPackWeight = ({ weightInfo }) => {
  const { weight, units } = weightInfo;

  const transformedWeight = weight
    .toString()
    .split(".")
    .join(",");

  return (
    <div>
      <span>{transformedWeight}</span>
      <span>{units}</span>
    </div>
  );
};

export default feedPackWeight;
