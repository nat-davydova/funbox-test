import React from "react";

const feedPackFeature = ({ val = "", descr }) => (
  <li>
    {val && <strong>{val}</strong>}
    {descr}
  </li>
);

export default feedPackFeature;
