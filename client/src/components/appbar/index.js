import React, { Component } from "react";
import Page from "./page";
import { fetchThunk } from "../../redux/actions/search";
import {
  addSuggestions,
  changeSugestions
} from "../../redux/actions/suggestions";
import { generatePath, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Suggestions from "../suggestions/index";
/**
 * Search bar
 */
class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestion: ""
    };
  }
  /**
   * Build the search url
   * @param value string with plane fragment
   */
  buildSearch = value => {
    const generated = generatePath("/items?:param=:search", {
      search: String(value).replace(" ", ""),
      param: "search"
    });
    this.props.fetchThunk(generated);
    this.navigateTo(generated);
    this.props.addSuggestions(value);
  }

  /**
   * Navigate to given path
   * @param {string} path to navigate
   */
  navigateTo(path) {
    this.props.history.push(path);
  }

  /**
   * Change the suggestion to filtering the search
   */
  handleFilter  = value => {
    this.setState({ suggestion: value });
  }

  /**
   * Control of the change of input search
   */
  handleChage = value => {
    this.props.changeSugestions(value);
    this.setState({ suggestion: value });
  };
  render() {
    return (
      <div>
        <Page
          handleSearch={this.buildSearch}
          filter={this.handleFilter}
          update={this.props.suggestion.option}
          remove={this.handleChage}
          suggestion={this.state.suggestion}
        />
        <Suggestions suggestion={this.state.suggestion} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    suggestion: state.suggestionReducer
  };
};

const mapDispatchToProps = {
  fetchThunk,
  addSuggestions,
  changeSugestions
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppBar));
