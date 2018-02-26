import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './Item.css';


class Item extends Component {

  render() {
    return (
      <div class="row">
      <div class="col-xs-6 col-md-4">
      <div class="thumbnail">
      <img style={{width: '250px', height: '250px'}} src={this.props.image} alt="..."/>
      <div class="caption">
        <h3>{this.props.header}</h3>
        <p>{this.props.description}</p>
        <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
      		</div>
          </div>
          </div>
          </div>

    );
  }
}

export default Item;
