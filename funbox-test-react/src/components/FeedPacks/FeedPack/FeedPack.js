import React from "react";
import classnames from "classnames";

import FeedPackCard from "./FeedPackCard/FeedPackCard";

const feedPack = ({ classes = "" }) => {
  const { root } = classes;

  const packClassnames = classnames("feed-pack", root);

  return (
    <article className={packClassnames}>
      <FeedPackCard />
    </article>
  );
};

export default feedPack;
