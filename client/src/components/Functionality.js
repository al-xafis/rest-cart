import React from "react";

const Functionality = () => {
  return (
    <div className="functionality">
      <div className="container">
        <div className="functions">
          <div className="function">
            <div className="function__icon">
              <i class="fas fa-truck"></i>
            </div>
            <div className="function__title">Free Shipping</div>
            <div className="function__description">
              Free Shipping on order over $99
            </div>
          </div>
          <div className="function">
            <div className="function__icon">
            <i class="far fa-money-bill-alt"></i>
            </div>
            <div className="function__title">Cash On Delivery</div>
            <div className="function__description">
              The Internet Trend to Repeat
            </div>
          </div>
          <div className="function">
            <div className="function__icon">
              <i class="fas fa-gift"></i>
            </div>
            <div className="function__title">Gift For All</div>
            <div className="function__description">
              Receive Gift When Subscribe
            </div>
          </div>
          <div className="function">
            <div className="function__icon">
              <i class="far fa-clock"></i>
            </div>
            <div className="function__title">Opening All Week</div>
            <div className="function__description">
              6.00 am - 17.00 pm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Functionality;
