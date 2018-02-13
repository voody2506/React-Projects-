import React, { Component } from 'react';
import contact from './contact';
import todo from './todo/src/App';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => (
  <Router>
    <div>
<nav class="navbar navbar-default navbar-static-top">
  <div class="container">



        <a><Link to="/">Home</Link></a>
        <a><Link to="/contact">Contact-list</Link></a>
        <a><Link to="/todo">ToDo list</Link></a>

  </div>
</nav>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/contact" component={contact}/>
      <Route path="/todo" component={todo}/>
    </div>
  </Router>
)



export default App;