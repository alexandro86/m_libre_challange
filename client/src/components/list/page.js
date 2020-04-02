import React from "react";
import "./index.scss";

const Page = ({ price, title, condition, picture }) => {
  return (
    <div className="card container">
      <div className="card--picture">
        <img alt="Foto Producto" src={picture} />
      </div>
      <div className="card--info">
        <div className="card--info--price">
          <span className="card--info--price--currency">$</span>
          {price}
        </div>
        <div className="card--info--title">{title}</div>
      </div>
      <div className="card--remark">{condition}</div>
    </div>
  );
};

export default Page;
