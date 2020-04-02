import React, { Component } from "react";
import { connect } from "react-redux";
import { loadContent } from "../../redux/actions/suggestions";
import "./index.scss";
/**
 * Each suggestion at bar
 */
class SuggestionItem extends Component {
  /**
   * When click on it
   */
  handleClick = () => {
    this.props.loadContent(this.props.content);
  };
  render() {
    return (
      <div className="s-item" onClick={this.handleClick}>
        {this.props.content}
      </div>
    );
  }
}

const mapDispatchToProps = {
  loadContent
};

export default connect(null, mapDispatchToProps)(SuggestionItem);
