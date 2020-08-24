import { v4 as uuid } from "uuid";

import CatImg from "../../assets/img/cat.png";

export const feedPacksConfig = [
  {
    id: uuid(),
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
  },
  {
    id: uuid(),
    suptitle: "Сказочное заморское яство",
    title: "Нямушка",
    type: "с рыбой",
    descr: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    features: [
      {
        val: 40,
        descr: "порций"
      },
      {
        val: 2,
        descr: "мыши в подарок"
      }
    ],
    imgInfo: {
      img: CatImg,
      alt: "Фотография пушистого кота в ошейнике"
    },
    weightInfo: {
      weight: 2,
      units: "кг"
    },
    isPicked: false,
    isDisabled: false
  },
  {
    id: uuid(),
    suptitle: "Сказочное заморское яство",
    title: "Нямушка",
    type: "с курой",
    descr: "Филе из цыплят с трюфелями в бульоне.",
    features: [
      {
        val: 100,
        descr: "порций"
      },
      {
        val: 5,
        descr: "мышей в подарок"
      },
      {
        val: null,
        descr: "заказчик доволен"
      }
    ],
    imgInfo: {
      img: CatImg,
      alt: "Фотография пушистого кота в ошейнике"
    },
    weightInfo: {
      weight: 5,
      units: "кг"
    },
    isPicked: false,
    isDisabled: true
  }
];
