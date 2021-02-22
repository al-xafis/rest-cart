import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import OrderedProducts from "../components/OrderedProducts";
import { useSelector } from "react-redux";
import Products from "../components/Products";

const Cart = () => {
  const products = useSelector((state) => state.products);

  return (
    <Fragment>
      <Navbar />
      <div className="cart">
        <div className="container">
          <h1 className="cart__title">Orders</h1>
          <div className="products">
            {products ? (
              products.map((product) => (
                <OrderedProducts
                  tag={products.tag}
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
      </div>
    </Fragment>
  );
};

export default Cart;
