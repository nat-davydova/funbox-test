import React, { Component } from "react";
import { connect } from "react-redux";

import Section from "components/Section/Section";
import FeedPacks from "components/FeedPacks/FeedPacks";

import { sectionConfig } from "./config";
import * as actionTypes from "store/actions/actions";

class FeedPacksContainer extends Component {
  state = {};

  render() {
    const { title: sectionTitle } = sectionConfig;

    return (
      <Section title={sectionTitle}>
        <FeedPacks
          feedPacks={this.props.feedPacks}
          clicked={this.props.onChangePickingPack}
        />
      </Section>
    );
  }
}

const mapStateToProps = state => {
  return {
    feedPacks: state.feedPacks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangePickingPack: id =>
      dispatch({ type: actionTypes.CHANGE_PICKING_STATE, id: id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedPacksContainer);
