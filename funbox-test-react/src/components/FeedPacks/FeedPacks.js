import React from "react";

import FeedPack from "./FeedPack/FeedPack";

import styles from "./FeedPacks.module.scss";

const feedPacks = props => (
  <div className={styles.feedPacks}>
    <FeedPack
      classes={{
        root: styles.feedPacks_elem
      }}
    />
    <FeedPack
      classes={{
        root: styles.feedPacks_elem
      }}
    />
    <FeedPack
      classes={{
        root: styles.feedPacks_elem
      }}
    />
  </div>
);

export default feedPacks;
