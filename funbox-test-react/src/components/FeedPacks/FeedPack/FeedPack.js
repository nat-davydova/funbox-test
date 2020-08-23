import React from "react";
import classnames from "classnames";

import FeedPackCard from "./FeedPackCard/FeedPackCard";

const feedPack = ({ classes = "" }) => {
  const { root } = classes;

  const packClassnames = classnames("feed-pack", root);

  const tempConfig = {
    suptitle: "Сказочное заморское яство"
  };

  return (
    <article className={packClassnames}>
      <FeedPackCard config={tempConfig} />
    </article>
  );
};

export default feedPack;
