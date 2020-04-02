import React from "react";
import "./index.scss";
import _ from "lodash"
const Page = ({
  item
}) => {
  if(_.isEmpty(item)) {
    return<h1>Loading...</h1>
  }
  return (
    <div className="card-detail">
      <div className="card-detail--container">
        <div className="card-detail--picture">
          <img alt="product" src={item.picture} width="100%" height="100%"></img>
        </div>
        <div className="card-detail--info">
          <div className="card-detail--info--condition">
            <span>{item.condition}</span>-
            <span className="card-detail--info--condition--sold">
              {item.sold} unidades vendidas
            </span>
          </div>
          <div className="card-detail--info--title">
            <span>{item.title}</span>
          </div>
          <div className="card-detail--info--price">
            <span className="card-detail--info--price--dollar">$</span>
            <span>{item.price.amount}</span>
            <span className="card-detail--info--price--decimals">
              {String(item.price.decimals).substring(0,2)}
            </span>
          </div>
          <button className="card-detail--button">Comprar</button>
        </div>
      </div>
      <div className="card-detail--description">
        <h2>Descripción del producto</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default Page;
