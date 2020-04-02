import React, { Component } from "react";
import Page from "./page";
import { connect } from "react-redux";
import _ from "lodash";
/**
 * Detail of product
 */
class Details extends Component {
  render() {
    if (this.props.product.response.loading) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <Page
          item={_.get(this.props.product, "response.item", {})}
        />
      </div>
    );
  }
}
const maapStateToProps = state => {
  return {
    product: state.productReducer
  };
};
export default connect(maapStateToProps)(Details);
