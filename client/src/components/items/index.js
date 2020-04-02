import React, { Component } from "react";
import Page from "./page";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Items extends Component {
  render() {
    return <Page items={this.props.reducer.response.items} />;
  }
}

const mapStateToProps = state => {
  return {
    reducer: state.searchReducer
  };
};

export default withRouter(connect(mapStateToProps)(Items));
