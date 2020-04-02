import React, { Component } from "react";
import Page from "./page";
import { connect } from "react-redux";
import { withRouter } from "react-router";
/**
 * Every product item
 */
class Items extends Component {
  render() {
    return <Page items={this.props.reducer.response.items} loading={this.props.reducer.response.loading} />;
  }
}

const mapStateToProps = state => {
  return {
    reducer: state.searchReducer
  };
};

export default withRouter(connect(mapStateToProps)(Items));
