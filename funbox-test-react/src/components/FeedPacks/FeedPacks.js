import React from "react";

import FeedPack from "./FeedPack/FeedPack";

import styles from "./FeedPacks.module.scss";

const feedPacks = ({ feedPacks }) => {
  const feedPacksArr = feedPacks.map(elem => {
    return (
      <FeedPack
        classes={{
          root: styles.feedPacks_elem
        }}
        config={elem}
      />
    );
  });

  return <div className={styles.feedPacks}>{feedPacksArr}</div>;
};

export default feedPacks;
