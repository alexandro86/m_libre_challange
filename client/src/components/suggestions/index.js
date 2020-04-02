import React, { Component } from "react";
import { connect } from "react-redux";
import Page from "./page";
import _ from "lodash";
import "./index.scss";
/**
 * suggestions at bar
 */
class Suggestions extends Component {
  render() {
    if (
      !this.props.suggestions.visible ||
      _.isEmpty(this.props.suggestions.option)
    ) {
      return <></>;
    }
    return (
      <div className="suggestions">
        <Page
          options={this.props.suggestions.options}
          suggestion={this.props.suggestion}
        />
      </div>
    );
  }
}

const mapStateToprops = state => {
  return {
    suggestions: state.suggestionReducer
  };
};

export default connect(mapStateToprops)(Suggestions);
