import React from "react";

import FeedPack from "./FeedPack/FeedPack";

import styles from "./FeedPacks.module.scss";

const feedPacks = props => (
  <div className={styles.feedPacks}>
    <FeedPack />
    <FeedPack />
    <FeedPack />
  </div>
);

export default feedPacks;
