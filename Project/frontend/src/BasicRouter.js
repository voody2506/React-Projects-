import React, { Component } from 'react';
import logo from './logo.svg';
import './BasicRouter.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Mackbook from './Mackbook'
import Iphone from './Iphone'
import Ipad from './Ipad'

import 'bootstrap/dist/css/bootstrap.css';

var rootStyle = {
  color : '#403F3F',
  height : '100%',
}

const BasicRouter = () => (
  <Router>
    <div>

    <nav class="navbar navbar-default navbar-static-top">
  <div class="container">


       <a><Link to="/" style={{ color: '#5AC8FA',textDecoration:'none' }}>Iphone</Link></a>
        <a><Link to="/Mackbook" style={{ color: '#5AC8FA',textDecoration:'none' }}>Mackbook</Link></a>
        <a><Link to="/Ipad" style={{ color: '#5AC8FA',textDecoration:'none' }}>Ipad</Link></a>

       </div>
      </nav>


      <Route exact path="/" component={Iphone}/>
      <Route exact path="/Mackbook" component={Mackbook} />
      <Route exact path="/Ipad" component={Ipad} />
    </div>
  </Router>
);

export default BasicRouter;
