import React from "react";

const OrderedProducts = ({ tag, img, name, edition, price }) => {
  return (
    <div className="product">
      <div className="product__tag">{tag}</div>
      <img className="product__img" src={img} alt="Black coat" />
      <p className="product__name">{name}</p>
      <p className="product__edition">{edition}</p>
      <p className="orderedproduct__price">{price}</p>
    </div>
  );
};

export default OrderedProducts;
