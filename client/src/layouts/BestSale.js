import React from 'react';
import Products from '../components/Products';
import BestSaleProducts from '../components/BestSaleProducts';

const BestSale = ({ title }) => {
  return (
    <section className="newproduct">
      <div className="container">
        <h1 className="newproduct__title" id="target">{title}</h1>
        <BestSaleProducts />
      </div>
    </section>
  )
};

export default BestSale;