import React from "react";
import classnames from "classnames";

import FeedPackCard from "./FeedPackCard/FeedPackCard";

const feedPack = ({ classes = "" }) => {
  const { root } = classes;

  const packClassnames = classnames("feed-pack", root);

  const tempConfig = {
    suptitle: "Сказочное заморское яство",
    title: "Нямушка",
    type: "с фуа-гра",
    features: [
      {
        val: 10,
        descr: "порций"
      },
      {
        val: false,
        descr: "мышь в подарок"
      }
    ]
  };

  return (
    <article className={packClassnames}>
      <FeedPackCard config={tempConfig} />
    </article>
  );
};

export default feedPack;
