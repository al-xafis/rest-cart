import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
    <Fragment>
      <Router>
        <Route exact path="/" component={Main} />
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
