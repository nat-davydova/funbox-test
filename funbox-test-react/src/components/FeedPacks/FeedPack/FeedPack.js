import React from "react";
import classnames from "classnames";

import FeedPackCard from "./FeedPackCard/FeedPackCard";
import FeedPackInfo from "./FeedPackInfo/FeedPackInfo";

import CatImg from "assets/img/cat.png";

const feedPack = ({ classes = "" }) => {
  const { root } = classes;

  const packClassnames = classnames("feed-pack", root);

  return <article className={packClassnames}></article>;
};

export default feedPack;
