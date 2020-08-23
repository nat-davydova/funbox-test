import React from "react";
import classnames from "classnames";

import FeedPackCard from "./FeedPackCard/FeedPackCard";
import FeedPackInfo from "./FeedPackInfo/FeedPackInfo";

import CatImg from "assets/img/cat.png";

const feedPack = ({ classes = "" }) => {
  const { root } = classes;

  const packClassnames = classnames("feed-pack", root);

  const tempConfig = {
    suptitle: "Сказочное заморское яство",
    title: "Нямушка",
    type: "с фуа-гра",
    descr: "Печень утки разварная с артишоками.",
    features: [
      {
        val: 10,
        descr: "порций"
      },
      {
        val: null,
        descr: "мышь в подарок"
      }
    ],
    imgInfo: {
      img: CatImg,
      alt: "Фотография пушистого кота в ошейнике"
    },
    weightInfo: {
      weight: 0.5,
      units: "кг"
    },
    isPicked: false,
    isDisabled: false
  };

  return (
    <article className={packClassnames}>
      <FeedPackCard config={tempConfig} />
      <FeedPackInfo config={tempConfig} />
    </article>
  );
};

export default feedPack;
