import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Mackbook from './Mackbook'
import Iphone from './Iphone'
import 'bootstrap/dist/css/bootstrap.css';

const BasicRouter = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Iphone</Link>
        </li>
        <li>
          <Link to="/Mackbook">Mackbook</Link>
        </li>
      </ul>

      <Route exact path="/" component={Iphone}/>
      <Route exact path="/Mackbook" component={Mackbook} />
    </div>
  </Router>
);

export default BasicRouter;
