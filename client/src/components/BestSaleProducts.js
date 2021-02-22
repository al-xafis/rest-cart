import React from "react";
import { addProduct } from '../features/productsSlice';
import { useDispatch } from 'react-redux';
import products from '../app/products';

const BestSaleProducts = () => {

  const dispatch = useDispatch();

  return (
    <div className="products">
      <div className="product">
        <div className="product__tag">New</div>
        <img className="product__img" src="./img/1.jpg" alt="Black coat" />
        <p className="product__name">Polyester Black Coat</p>
        <p className="product__edition">Block Out Edition</p>
        <p className="product__price">$129.99</p>
        <button className="product__btn" onClick={() => dispatch(addProduct(products[4]))}>Add to cart</button>
      </div>
      <div className="product">
        <div className="product__tag">New</div>
        <img className="product__img" src="./img/2.jpg" alt="Black coat" />
        <p className="product__name">Polyester Grey Coat</p>
        <p className="product__edition">Block Out Edition</p>
        <p className="product__price">$159.99</p>
        <button className="product__btn" onClick={() => dispatch(addProduct(products[5]))}>Add to cart</button>
      </div>
      <div className="product">
        <div className="product__tag">New</div>
        <img className="product__img" src="./img/3.jpg" alt="Black coat" />
        <p className="product__name">Black Leather Bag</p>
        <p className="product__edition">Limited Edition</p>
        <p className="product__price">$84.99</p>
        <button className="product__btn" onClick={() => dispatch(addProduct(products[6]))}>Add to cart</button>
      </div>
      <div className="product">
        <div className="product__tag">New</div>
        <img className="product__img" src="./img/4.jpg" alt="Black coat" />
        <p className="product__name">White Sneakers</p>
        <p className="product__edition">Limited Edition</p>
        <p className="product__price">$79.99</p>
        <button className="product__btn" onClick={() => dispatch(addProduct(products[7]))}>Add to cart</button>
      </div>
      <div className="product">
        <div className="product__tag">New</div>
        <img className="product__img" src="./img/5.jpg" alt="Black coat" />
        <p className="product__name">White Sneakers</p>
        <p className="product__edition">Limited Edition</p>
        <p className="product__price">$79.99</p>
        <button className="product__btn" onClick={() => dispatch(addProduct(products[8]))}>Add to cart</button>
      </div>
      <div className="product">
        <div className="product__tag">New</div>
        <img className="product__img" src="./img/6.jpg" alt="Black coat" />
        <p className="product__name">White Sneakers</p>
        <p className="product__edition">Limited Edition</p>
        <p className="product__price">$79.99</p>
        <button className="product__btn" onClick={() => dispatch(addProduct(products[9]))}>Add to cart</button>
      </div>
      <div className="product">
        <div className="product__tag">New</div>
        <img className="product__img" src="./img/7.jpg" alt="Black coat" />
        <p className="product__name">White Sneakers</p>
        <p className="product__edition">Limited Edition</p>
        <p className="product__price">$79.99</p>
        <button className="product__btn" onClick={() => dispatch(addProduct(products[10]))}>Add to cart</button>
      </div>
      <div className="product">
        <div className="product__tag">New</div>
        <img className="product__img" src="./img/8.jpg" alt="Black coat" />
        <p className="product__name">White Sneakers</p>
        <p className="product__edition">Limited Edition</p>
        <p className="product__price">$79.99</p>
        <button className="product__btn" onClick={() => dispatch(addProduct(products[11]))}>Add to cart</button>
      </div>
    </div>
  );
};

export default BestSaleProducts;
