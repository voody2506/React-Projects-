import React, { Component } from 'react';
import logo from './logo.svg';
import './contact.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const people = [
{
	id:1,
	first:"Mike",
	last:"Jhonson",
	age: 25
},
{
	id:2,
	first:"Bob",
	last:"Splinter",
	age:19
},
{
	id:3,
	first:"Hart",
	last:"Bayker",
	age:25
},
{
	id:4,
	first:"Sherlock",
	last:"Holmes",
	age:42
},
{
	id:5,
	first:"Doctor",
	last:"Watson",
	age:38
},

]



export default class contact extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			people: people,
			term:'',
			clickFirst:"",
			clickAge:0,
			clickLast:"",
			modalIsOpen: false


		}
		this.searchHandler = this.searchHandler.bind(this);
		this.showMore = this.showMore.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	searchHandler(event){

		this.setState({term:event.target.value})

	}

	showMore(event){
		const foundPerson = people.find((element) => {
    return element.id === event;
  })
		const name = foundPerson.first
    this.setState({
      clickFirst:foundPerson.first,
      clickLast:foundPerson.last,
      clickAge:foundPerson.age
    })
	this.setState({modalIsOpen: true});
	
	}

  searchingFor(term){
  return function(x){
    return x.first.toLowerCase().includes(term.toLowerCase()) || !term;
  }

	 closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="contact">
      <form>
    <div class="input-group">
    <div class = "centerBlock">
      <input type ="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1" onChange={this.searchHandler}/>
      </div>
      </div>
      </form>
      {
      	this.state.people.filter(this.searchingFor(this.state.term)).map(person =>
      			<div key = {person.id}>
      			<div class = "centerBlock">
      			<ul class="list-group">

				<button type="button" class="btn btn-primary" onClick={this.showMore.bind(this,person.id)} data-toggle="modal" data-target="#myModal">{person.first}</button>      			

      		
      			</ul>

      			</div>

      			</div>

      			)
      	
      }

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal">

       <div class="page-header">
      <h1>{this.state.clickFirst} <small>{this.state.clickLast}</small> <small>{this.state.clickAge}</small></h1>
    </div>
        </Modal>


      </div>
    );
  }
}
