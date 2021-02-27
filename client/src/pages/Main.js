import React, { Fragment, useEffect } from 'react';
import Header from '../components/Header';
import NewProduct from '../layouts/NewProduct';
import Collection from '../layouts/Collection';
import BestSale from '../layouts/BestSale';
import Functionality from '../components/Functionality';
import NewLatest from '../components/NewLatest';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import jump from 'jump.js';



const Main = () => {

  useEffect(() => {
    const button = document.getElementById("button");
    button.addEventListener("click", () => {
    jump('#target')
  });
  }, [])


  return (
    <Fragment>
    <Header />
    <NewProduct title="New Product"/>
    <Collection />
    <BestSale title="Best Sale"/>
    <Functionality />
    <NewLatest />
    <Footer />
    <Copyright />
    </Fragment>
  )
};

export default Main;