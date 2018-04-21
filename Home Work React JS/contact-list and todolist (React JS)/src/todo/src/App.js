import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Input from './Input';
import Item from './Item';
import './App.css';
import axios from 'axios';
var querystring = require('querystring');
var qs = require('qs');

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

componentWillMount=()=>{
  this.get()
}

async get(){
  var arrayvar = new Array()
  try {
    let response = await fetch(
      'http://127.0.0.1:8000/todos/'
    );
    let responseJson = await response.json();
     responseJson['text'].map((i) => {
        arrayvar.push({id:i['id'],text:i['title']})
        console.log(i)
      });

     this.setState({
      todos:arrayvar
     })
    //console.log(responseJson['text'])
  } catch (error) {
    console.error(error);
  }
}

  addTodo(todoText){
    var newTodoId;
    var params = new URLSearchParams();
    params.append('new_todo', todoText);

   axios.post('http://127.0.0.1:8000/todos/',params)
   .then((response) => {
    console.log(response)
    newTodoId = response['data']['id']
    let todos=this.state.todos.slice();
    todos.push({id:newTodoId,text:todoText});
    this.setState({
      todos: todos,
      nextId:++this.state.nextId
    });
   })
   .catch((error) =>  {
     console.log(error);
   });

  }





  removeTodo(id){
    //'change/<int:todo_id>'

    axios.get('http://127.0.0.1:8000/change/'+id)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

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
