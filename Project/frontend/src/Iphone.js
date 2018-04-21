import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Item from './Item'
import SearchInput, {createFilter} from 'react-search-input'
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.css';
import Cart from './Cart';
import axios from 'axios';


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
    
const KEYS_TO_FILTERS = ['header','description']


class App extends Component {


	

constructor(props) {
  super(props);

  this.state = {
    searchTerm: '',
    modalIsOpen: false,
    cartArray:[],
    modalTitle:'',
    items:[]
  };
    this.searchUpdated = this.searchUpdated.bind(this)
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


   componentDidMount=()=>{
   var arrayvar = new Array()
   var newCartVar = new Array()
   axios.get('http://127.0.0.1:8000/post/')
    .then((response)=> {
     response['data']['posts'].map((i) => {
        //arrayvar.push({id:i['id'],text:i['title']})
        if(i['model'] == 'iphone'){
        arrayvar.push({id:i['id'],header:i['title'],description:i['description'],image:i['image']})
      this.setState({
      items:arrayvar
     })
      }
      });

  })
  .catch((error)=> {
    console.log(error);
  });


   axios.get('http://127.0.0.1:8000/cart/')
    .then((response)=> {
      console.log(response)
     response['data']['cart'].map((i) => {
        //arrayvar.push({id:i['id'],text:i['title']})
        newCartVar.push({id:i['id'],text:i['title']})
        console.log(i)
      this.setState({
      cartArray:newCartVar
     })
            });

  })
  .catch((error)=> {
    console.log(error);
  });

   }

  openModal(e) {

    var newTodoId;
    var params = new URLSearchParams();
    params.append('new_cart', e);

   axios.post('http://127.0.0.1:8000/cart/',params)
   .then((response) => {
    console.log(response)
    newTodoId = response['data']['id']
    this.setState({modalIsOpen: true,modalTitle:e});
    var newArray = this.state.cartArray.slice();    
    newArray.push({id:newTodoId,text:e});   
    this.setState({cartArray:newArray})

   })
   .catch((error) =>  {
     console.log(error);
   });


    

  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal(e) {
    this.setState({modalIsOpen: false});
  }


 searchUpdated (term) {
    this.setState({searchTerm: term})
  }

  delete(e){
  axios.get('http://127.0.0.1:8000/cartdel/'+e['id'])
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  var array = this.state.cartArray;
  var index = array.indexOf(e)
  array.splice(index, 1);
  this.setState({cartArray: array });
  }


  render() {
   
    const filteredItems = this.state.items.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
 
    return (
      <div className="App">
      <h3>My Personal Cart List</h3>
        

      {
      this.state.cartArray.map((item) =>
      <Cart item={item.text} delete ={this.delete.bind(this,item)}/>
      )

}


      <SearchInput type="text" style={{display: 'flex',alignItems: 'center',width: '800px',margin: '0 auto',marginTop:'40px'}} class="form-control" placeholder="Search" aria-describedby="sizing-addon1" onChange={this.searchUpdated}/>


      <h3 style={{marginTop:'40px'}}>Shopping Items</h3>

      
   		{
      	filteredItems.map((item) => 
          <div style={{ float: 'left',
  position: 'relative',
  width: '50%',marginTop:'40px'}}>
      		<Item openModal={this.openModal.bind(this,item.header)} header={item.header} description={item.description} image = {item.image} />
          </div>
      		)
      }
       <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        {
            <h3>{this.state.modalTitle} Added to your Personal cart</h3>
          
        }

        </Modal>
      
      </div>
    );
  }



}



export default App;
