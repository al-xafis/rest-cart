import React, { Fragment} from 'react'
import "./App.css";
import Header from './components/Header';
import NewProduct from './layouts/NewProduct';
import Collection from './layouts/Collection';
import BestSale from './layouts/BestSale';
import Functionality from './components/Functionality';
import NewLatest from './components/NewLatest';

function App() {
  return (
    <Fragment>
      <Header />
      <NewProduct title="New Product"/>
      <Collection />
      <BestSale title="Best Sale"/>
      <Functionality />
      <NewLatest />
    </Fragment>
  );
}

export default App;
