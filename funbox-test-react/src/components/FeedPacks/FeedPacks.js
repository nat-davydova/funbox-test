import React from "react";

import FeedPack from "./FeedPack/FeedPack";

import styles from "./FeedPacks.module.scss";

const feedPacks = ({ feedPacks, clicked }) => {
  const feedPacksArr = feedPacks.map(elem => {
    return (
      <FeedPack
        key={elem.id}
        classes={{
          root: styles.feedPacks_elem
        }}
        config={elem}
      />
    );
  });

  return (
    <div onClick={clicked} className={styles.feedPacks}>
      {feedPacksArr}
    </div>
  );
};

export default feedPacks;
