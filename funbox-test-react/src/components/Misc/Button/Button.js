import React from "react";

const button = ({ classes = "", children }) => {
  const { root = "" } = classes;

  return (
    <button className={root}>
      <span>{children}</span>
    </button>
  );
};

export default button;
