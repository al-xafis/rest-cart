import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import StashedProducts from "../components/StashedProducts";
import { useSelector } from "react-redux";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import axios from "axios";
import { nanoid } from "@reduxjs/toolkit";

const Stash = () => {
  let [products, setProducts] = useState([]);
  let user = useSelector((state) => state.user.user);

  useEffect(async () => {
    try {
      if (user) {
        let res = await axios.get("http://localhost:5000/user/products");
        if (localStorage.token) {
          setProducts(res.data);
        } else {
          setProducts([]);
        }
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  if (user) {
    return (
      <Fragment>
        <Navbar />
        <div className="stash">
          <div className="container">
            <h1 className="stash__title">Stash - already bought items</h1>
            <div className="products">
              {products ? (
                products.map((product) => (
                  <StashedProducts
                    key={nanoid()}
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
  } else {
    return (
      <Fragment>
        <Navbar />
        <div className="cart">
          <div className="container">
            <h1 className="cart__title__login">Please Login</h1>
            <div className="products"></div>
          </div>
          <Footer />
          <Copyright />
        </div>
      </Fragment>
    );
  }
};

export default Stash;
