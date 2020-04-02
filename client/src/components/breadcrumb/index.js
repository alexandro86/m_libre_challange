import React, { Component } from "react";
import Page from "./page";
import { connect } from "react-redux";
import _ from "lodash";
import { withRouter } from "react-router-dom";
class BreadCrumb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crumbs: [],
      separator: " > "
    };
    this.handleBack = this.handleBack.bind(this);
  }
  handleBack() {
    this.props.history.goBack();
  }
  render() {
    return (
      <div>
        <Page
          category={
            _.head(this.props.reducer.response.categories) !== undefined
              ? _.head(this.props.reducer.response.categories)
              : ""
          }
          id={
            _.isEmpty(this.props.location.search)
              ? _.get(this.props.product.response, "category", "")
              : ""
          }
          separator={
            _.isEmpty(this.props.location.search) ? this.state.separator : ""
          }
          back={this.handleBack}
        />
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    reducer: state.searchReducer,
    product: state.productReducer
  };
};

export default withRouter(connect(mapStatetoProps)(BreadCrumb));
