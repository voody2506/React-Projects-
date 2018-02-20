import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Input from './Input';
import Item from './Item';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      todos: [],
      nextId: 0
    }
    this.addTodo=this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  addTodo(todoText){
    let todos=this.state.todos.slice();
    todos.push({id:this.state.nextId,text:todoText});
    this.setState({
      todos: todos,
      nextId:++this.state.nextId
    });
  }
  removeTodo(id){
    this.setState({
      todos:this.state.todos.filter((todo,index) =>todo.id!==id)
    })
  }
  render() {
    return (
      <div className="App">
      <div className="todo-wrapper">
      <Input todoText="" addTodo={this.addTodo}/>
      <ul>
      {
        this.state.todos.map((todo) => {
          return <Item todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
        })
      }
      </ul>
      </div>
      </div>
    );
  }
}

export default App;
