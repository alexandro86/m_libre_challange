import React, { Component } from "react";
import { connect } from "react-redux";
import { loadContent } from "../../redux/actions/suggestions";
import "./index.scss";

class SuggestionItem extends Component {
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
