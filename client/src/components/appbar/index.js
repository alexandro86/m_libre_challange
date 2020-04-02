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
    this.buildSearch = this.buildSearch.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.state = {
      suggestion: ""
    };
  }
  buildSearch(value) {
    const generated = generatePath("/items?:param=:search", {
      search: String(value).replace(" ", ""),
      param: "search"
    });
    this.props.fetchThunk(generated);
    this.navigateTo(generated);
    this.props.addSuggestions(value);
  }
  navigateTo(path) {
    this.props.history.push(path);
  }

  handleFilter(value) {
    this.setState({ suggestion: value });
  }

  handleRemove = value => {
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
          remove={this.handleRemove}
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
