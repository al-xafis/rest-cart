import React from "react";
import { removeProduct } from '../features/productsSlice';
import { useDispatch } from 'react-redux';

const OrderedProducts = ({ tag, img, name, edition, price, id }) => {
  const dispatch = useDispatch();
  // console.log(id);
  // const removeItem = e => {
  //   e.preventDefault();
  //   dispatch(removeProduct(id));
  // }
  return (
    <div className="product">
      <button className="product__remove" onClick={() => dispatch(removeProduct(id))}>X</button>
      <div className="product__tag">{tag}</div>
      <img className="product__img" src={img} alt="Black coat" />
      <p className="product__name">{name}</p>
      <p className="product__edition">{edition}</p>
      <p className="orderedproduct__price">{price}</p>
    </div>
  );
};

export default OrderedProducts;
