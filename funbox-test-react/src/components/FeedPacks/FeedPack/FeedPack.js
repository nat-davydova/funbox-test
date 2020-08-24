import React from "react";
import classnames from "classnames";

import FeedPackCard from "./FeedPackCard/FeedPackCard";
import FeedPackInfo from "./FeedPackInfo/FeedPackInfo";

const feedPack = ({ classes = "", config, clicked }) => {
  const { root } = classes;

  const packClassnames = classnames("feed-pack", root);

  return (
    <article
      className={packClassnames}
      id={config.id}
      onClick={() => clicked(config.id)}
    >
      <FeedPackCard config={config} />
      <FeedPackInfo config={config} />
    </article>
  );
};

export default feedPack;
