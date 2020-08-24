import React, { Component } from "react";
import { connect } from "react-redux";

import Section from "components/Section/Section";
import FeedPacks from "components/FeedPacks/FeedPacks";

import { sectionConfig } from "./config";

class FeedPacksContainer extends Component {
  state = {};

  render() {
    const { title: sectionTitle } = sectionConfig;

    return (
      <Section title={sectionTitle}>
        <FeedPacks feedPacks={this.props.feedPacks} />
      </Section>
    );
  }
}

const mapStateToProps = state => {
  return {
    feedPacks: state.feedPacks
  };
};

export default connect(mapStateToProps)(FeedPacksContainer);
