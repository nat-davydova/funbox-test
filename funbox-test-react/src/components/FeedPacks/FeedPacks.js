import React from "react";
import PropTypes from "prop-types";

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
        clicked={clicked}
      />
    );
  });

  return <div className={styles.feedPacks}>{feedPacksArr}</div>;
};

feedPacks.propTypes = {
  feedPacks: PropTypes.array.isRequired,
  clicked: PropTypes.func.isRequired
};

export default feedPacks;
