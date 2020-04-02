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
          description={_.get(
            this.props.product,
            "response.item.description",
            ""
          )}
          title={_.get(this.props.product, "response.item.title", "")}
          picture={_.get(this.props.product, "response.item.picture", "")}
          condition={_.get(this.props.product, "response.item.condition", "")}
          price={_.get(this.props.product, "response.item.price.amount", "")}
          decimals={_.get(
            this.props.product,
            "response.item.price.decimals",
            ""
          )}
          loading={_.get(this.props.product, "response.loading", "")}
          sold={_.get(this.props.product, "response.item.sold_quantity", "")}
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
