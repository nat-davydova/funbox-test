import React, { Component } from "react";

import Section from "components/Section/Section";

import { sectionConfig } from "./config";

class FeedPacks extends Component {
  state = {};

  render() {
    const { title: sectionTitle } = sectionConfig;

    return <Section title={sectionTitle} />;
  }
}

export default FeedPacks;
