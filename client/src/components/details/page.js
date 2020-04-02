import React from "react";
import "./index.scss";

const Page = ({
  picture,
  condition,
  title,
  price,
  description,
  sold,
  decimals
}) => {
  return (
    <div className="card-detail">
      <div className="card-detail--container">
        <div className="card-detail--picture">
          <img alt="product" src={picture} width="100%" height="100%"></img>
        </div>
        <div className="card-detail--info">
          <div className="card-detail--info--condition">
            <span>{condition}</span>-
            <span className="card-detail--info--condition--sold">
              {sold} unidades vendidas
            </span>
          </div>
          <div className="card-detail--info--title">
            <span>{title}</span>
          </div>
          <div className="card-detail--info--price">
            <span>$</span>
            <span>{price}</span>
            <span className="card-detail--info--price--decimals">
              {decimals}
            </span>
          </div>
          <button className="card-detail--button">Comprar</button>
        </div>
      </div>
      <div className="card-detail--description">
        <h2>Descripción del producto</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Page;
