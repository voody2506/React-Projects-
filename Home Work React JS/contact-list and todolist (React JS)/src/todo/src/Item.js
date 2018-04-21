import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Item.css';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  removeTodo(id) {
    this.props.removeTodo(id);
  }
  render(){
    return(
      <div className="todoWrapper">
      <button className="btn btn-primary" onClick={(e)=>this.removeTodo(this.props.id)}>remove</button>{this.props.todo.text}
      
      </div>
    );
  }
}
