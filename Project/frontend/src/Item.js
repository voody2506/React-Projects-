import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


class Item extends Component {

  render() {
    return (
      <div style={{float: 'left',
  position: 'relative',
  width: '100%'}}>
   <div class="col-sm-12 col-md-12">
    <div class="thumbnail">
      <img style={{width: '250px', height: '250px'}} src={this.props.image} alt="..."/>
      <div className="caption">
        <h3>{this.props.header}</h3>
        <p>{this.props.description}</p>
        <p><a href="#" class="btn btn-primary" role="button" onClick={this.props.openModal}>Buy</a></p>
      		</div>
          </div>
          </div>
          </div>

    );
  }
}

export default Item;
