import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import OrderedProducts from "../components/OrderedProducts";
import { useSelector } from "react-redux";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Copyright from '../components/Copyright';
import axios from 'axios';
import { nanoid } from "@reduxjs/toolkit";

const Cart = () => {

  const products = useSelector((state) => state.products);

  const onOrder = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    for(let i = 0; i < products.length; i++) {
      await axios.post('http://localhost:5000/user/products', products[i], config);
    }
  }

  return (
    <Fragment>
      <Navbar />
      <div className="cart">
        <div className="container">
          <h1 className="cart__title">Orders</h1>
          <div className="products">
            {products ? (
              products.map((product) => (
                <OrderedProducts key={nanoid()}
                  tag={product.tag}
                  img={product.img}
                  name={product.name}
                  edition={product.edition}
                  price={product.price}
                />
              ))
            ) : (
              <h1>No Products</h1>
            )}
          </div>
          <button className="checkout__btn" onClick={e => onOrder(e)}>Place an Order</button>
        </div>
        <Footer />
        <Copyright />
      </div>
    </Fragment>
  );
};

export default Cart;