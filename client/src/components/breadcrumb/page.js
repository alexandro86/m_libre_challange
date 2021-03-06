import React from "react";
import _ from "lodash";
import "./index.scss";
const Page = ({ category, id, separator, back }) => {
  const handleClick = () => back();
  if (_.isEmpty(category) && _.isEmpty(id)) {
    return <div className="breadcrumb"></div>;
  } else if (!_.isEmpty(category) && _.isEmpty(id)) {
    return <div className="breadcrumb"><span>{category}</span></div>;
  } else if (!_.isEmpty(id)) {
    id = separator + id;
    return (
      <div className="breadcrumb">
        <span onClick={handleClick}>{category}</span> <span>{id}</span>
      </div>
    );
  }
};

export default Page;
