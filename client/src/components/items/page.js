import React from "react";
import List from "../list/index";
import "./index.scss";

const Page = ({ items }) => {
  if (items) {
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
  }
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default Page;
