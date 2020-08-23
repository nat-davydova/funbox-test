import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./FeedPackSuptitle.module.scss";

const feedPackSuptitle = ({ isDisabled, children }) => {
  const suptitleClassnames = classnames(styles.suptitle, {
    [styles.isDisabled]: isDisabled
  });

  return (
    <div className={suptitleClassnames}>
      <p>{children}</p>
    </div>
  );
};

feedPackSuptitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired
  ]),
  isDisabled: PropTypes.bool
};

export default feedPackSuptitle;
