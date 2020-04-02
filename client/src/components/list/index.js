import React, { Component } from "react";
import Page from "./page";
import { withRouter } from "react-router-dom";
import { fetchThunkProduct } from "../../redux/actions/searchProduct";
import { connect } from "react-redux";
class List extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.fetchThunkProduct(`/items/${this.props.id}`);
    this.props.history.push(`/items/${this.props.id}`);
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        <Page
          price={this.props.price}
          title={this.props.title}
          condition={this.props.condition}
          picture={this.props.picture}
        />
      </div>
    );
  }
}
const mapDispatchToProps = {
  fetchThunkProduct
};
export default withRouter(connect(null, mapDispatchToProps)(List));
