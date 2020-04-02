import React from "react";
import SuggestionItem from "../suggestionItem";
const Page = ({ options, suggestion }) => {
  const pageItem = options.filter(item =>
    String(item).match(new RegExp(suggestion, "i"))
  );
  return (
    <div>
      {pageItem.map(item => (
        <SuggestionItem content={item} key={item} />
      ))}
    </div>
  );
};

export default Page;
