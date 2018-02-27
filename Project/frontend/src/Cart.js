import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';



class Cart extends Component {


  render() {
    return (
      <ul class="list-group">
       <li style={{display: 'flex',alignItems: 'center',width: '200px',margin: '0 auto'}} class="list-group-item">{this.props.item}  <a href="#" style={{marginLeft:'5px',backgroundColor: 'red'}} onClick={this.props.delete} class="btn btn-primary" role="button">Delete</a></li>
      </ul>
     );
  }
}



export default Cart;
