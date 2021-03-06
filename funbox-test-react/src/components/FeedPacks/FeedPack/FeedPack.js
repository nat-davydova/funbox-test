import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import FeedPackCard from "./FeedPackCard/FeedPackCard";
import FeedPackInfo from "./FeedPackInfo/FeedPackInfo";

const feedPack = ({ classes = "", config, clicked }) => {
  const { root } = classes;

  const packClassnames = classnames("feed-pack", root);

  return (
    <article className={packClassnames} id={config.id}>
      <FeedPackCard config={config} clicked={clicked} />
      <FeedPackInfo config={config} clicked={clicked} />
    </article>
  );
};

feedPack.propTypes = {
  classes: PropTypes.object,
  config: PropTypes.object.isRequired,
  clicked: PropTypes.func.isRequired
};

export default feedPack;
