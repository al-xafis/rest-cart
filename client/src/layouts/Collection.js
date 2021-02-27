import jump from 'jump.js';
import React, { useEffect } from 'react';

const Collection = () => {

  useEffect(() => {
    const button = document.getElementById('button_shop');
    button.addEventListener('click', () => {
      jump('#target');
    })
  }, []);

  return (
  <section className="collection">
    <div className="collection_box">
      <div className="collection__upper">New Trend 2018</div>
      <h2 className="collection__middle">Women's Collection</h2>
      <div className="collection__bottom">Big Sale of This Week</div>
      <button className="collection__btn" id="button_shop">Shop Now</button>
    </div>
  </section>
  );
};

export default Collection;