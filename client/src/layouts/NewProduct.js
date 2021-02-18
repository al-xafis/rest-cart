import React from 'react';
import Products from '../components/Products';

const NewProduct = ({ title }) => {
  return (
    <section className="newproduct">
      <div className="container">
        <h1 className="newproduct__title">{title}</h1>
        <Products />
      </div>
    </section>
  )
};

export default NewProduct;