import React from "react";

const Products = () => {
  return (
    <div className="products">
      <div className="product">
        <div className="product__tag">New</div>
        <img className="product__img" src="./img/16.jpg" alt="Black coat" />
        <p className="product__name">Polyester Black Coat</p>
        <p className="product__edition">Block Out Edition</p>
        <p className="product__price">$129.99</p>
        <button className="product__btn">Add to cart</button>
      </div>
      <div className="product">
        <div className="product__tag">New</div>
        <img className="product__img" src="./img/15.jpg" alt="Black coat" />
        <p className="product__name">Polyester Grey Coat</p>
        <p className="product__edition">Block Out Edition</p>
        <p className="product__price">$159.99</p>
        <button className="product__btn">Add to cart</button>
      </div>
      <div className="product">
        <div className="product__tag">New</div>
        <img className="product__img" src="./img/14.jpg" alt="Black coat" />
        <p className="product__name">Black Leather Bag</p>
        <p className="product__edition">Limited Edition</p>
        <p className="product__price">$84.99</p>
        <button className="product__btn">Add to cart</button>
      </div>
      <div className="product">
        <div className="product__tag">New</div>
        <img className="product__img" src="./img/13.jpg" alt="Black coat" />
        <p className="product__name">White Sneakers</p>
        <p className="product__edition">Limited Edition</p>
        <p className="product__price">$79.99</p>
        <button className="product__btn">Add to cart</button>
      </div>
    </div>
  );
};

export default Products;
