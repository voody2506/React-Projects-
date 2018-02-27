import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Item from './Item'
import SearchInput, {createFilter} from 'react-search-input'
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.css';
import Cart from './Cart';

const items = [
  	{
  		header:"Iphone X",
  		description:"Our vision has always been to create an iPhone that is entirely screen. One so immersive the device itself disappears into the experience. And so intelligent it can respond to a tap, your voice, and even a glance. With iPhone X, that vision is now a reality. Say hello to the future.",
      image:"https://htstatic.imgsmail.ru/torg_pic/20/450x450/model/74857ee4485cd50f18d4872fd3aa2323?src=14553539%2F1.jpg&version=17&hash=a3c11cc129f5ee656a3056c50b58c7b7"
  	},
  	{
  		header:"Iphone 8+",
  		description:"iPhone 8 PLUS introduces an all‑new glass design. The world’s most popular camera, now even better. The most powerful and smartest chip ever in a smartphone. Wireless charging that’s truly effortless. And augmented reality experiences never before possible. iPhone 8. A new generation of iPhone.",
  		image: "https://store.storeimages.cdn-apple.com/4662/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-silver-select-2017?wid=513&hei=556&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1504041014514"
  	},
  	{
  		header:"Iphone 8",
  		description:"iPhone 8 STANDART introduces an all‑new glass design. The world’s most popular camera, now even better. The most powerful and smartest chip ever in a smartphone. Wireless charging that’s truly effortless. And augmented reality experiences never before possible. iPhone 8. A new generation of iPhone.",
  		image:"http://www.istyle.eu/media/catalog/product/cache/10/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone8-gld-pureangles_gb-en-screen.jpeg"
  	},
  	{
  		header:"Iphone 7+",
  		description:"Phone 7 PlUS and iPhone 7  are smartphones designed, developed, and marketed by Apple Inc. They were announced on September 7, 2016, at the Bill Graham Civic Auditorium in San Francisco by Apple CEO Tim Cook, and were released on September 16, 2016, succeeding the iPhone 6S and iPhone 6S Plus as the flagship devices in the iPhone series.",
  		image:"https://store.storeimages.cdn-apple.com/4662/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/rosegold/iphone7-rosegold-select-2016?wid=470&hei=556&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1472430205982"
  	},
  	{
  		header:"Iphone 7",
  		description: "Phone 7 and iPhone 7 Plus are smartphones designed, developed, and marketed by Apple Inc. They were announced on September 7, 2016, at the Bill Graham Civic Auditorium in San Francisco by Apple CEO Tim Cook, and were released on September 16, 2016, succeeding the iPhone 6S and iPhone 6S Plus as the flagship devices in the iPhone series.",
  		image:"https://avatars.mds.yandex.net/get-mpic/397397/img_id6859039191880288086.jpeg/9hq"
  	}

  	]


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
    modalTitle:''
  };
    this.searchUpdated = this.searchUpdated.bind(this)
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(e) {
    this.setState({modalIsOpen: true,modalTitle:e});

    var newArray = this.state.cartArray.slice();    
    newArray.push(e);   
    this.setState({cartArray:newArray})

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
   var array = this.state.cartArray;
  var index = array.indexOf(e)
  array.splice(index, 1);
  this.setState({cartArray: array });
  }


  render() {
   
    const filteredItems = items.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
 
    return (
      <div className="App">
      <h3>My Personal Cart List</h3>
        

      {
      this.state.cartArray.map((item) =>
      <Cart item={item} delete ={this.delete.bind(this,item)}/>
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
