import React, { Component } from "react";

import Section from "components/Section/Section";
import FeedPacks from "components/FeedPacks/FeedPacks";

import { sectionConfig } from "./config";

class FeedPacksContainer extends Component {
  state = {};

  render() {
    const { title: sectionTitle } = sectionConfig;

    return (
      <Section title={sectionTitle}>
        <FeedPacks />
      </Section>
    );
  }
}

export default FeedPacksContainer;
