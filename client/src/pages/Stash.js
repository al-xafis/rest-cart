import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import OrderedProducts from "../components/OrderedProducts";
import { useSelector } from "react-redux";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Copyright from '../components/Copyright';
import axios from 'axios';
import { nanoid } from "@reduxjs/toolkit";

const Stash = () => {

  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/user/products");
    setProducts(res.data);
  }, []);
  

  return (
    <Fragment>
      <Navbar />
      <div className="stash">
        <div className="container">
          <h1 className="stash__title">Stash - already bought items</h1>
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
        </div>
        <Footer />
        <Copyright />
      </div>
    </Fragment>
  );
};

export default Stash;