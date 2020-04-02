import React from "react";
import List from "../list/index";
import "./index.scss";
import _ from "lodash";

const Page = ({ items }) => {
  if (!_.isEmpty(items)) {
    return (
      <div className="items">
        {items.map(it => (
          <List
            key={it.id}
            price={it.price.amount}
            title={it.title}
            condition={it.condition}
            picture={it.picture}
            id={it.id}
          />
        ))}
      </div>
    );
  } else if (_.isEmpty(items)) {
    return<h1>Not Founded!</h1>
  }
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default Page;
