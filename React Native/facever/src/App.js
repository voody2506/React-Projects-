import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Webcam from 'react-webcam';
import axios from 'axios';
import { Base64 } from 'js-base64';


class App extends Component {


constructor(props) {
  super(props);

  this.state = {detectInfo: "No Person Detected", screenshot: null};
  this.checkFace = this.checkFace.bind(this);
}

 
  componentDidMount(){
   // this.timer = setInterval(this.capture, 1000);

  }
  

    setRef = (webcam) => {
    this.webcam = webcam;
  }

   capture = () => {
    var result = this.webcam.getScreenshot();
    this.setState({screenshot:result});
    this.checkFace();
  };


checkFace(){

axios({
  method: 'post',
  url: 'https://api.kairos.com/detect',
  headers:{
    'Content-Type': "application/json",
    app_id: '3abfa62e',
    app_key:'13cab5e6f4cdc54e3a20b83947a790ea',
  },
  data: {
    image: this.state.screenshot,
  }
}).then(function (response) {
    console.log(response);

    
  })
  .catch(function (error) {
    console.log(error);
  });;
}


  render() {
    return (
      <div className="App">

        <Webcam
        height={300}
        width={300}
        style={{borderRadius:'50%'}}
        ref={this.setRef}
        screenshotFormat="image/jpeg"
        audio={false}
        />

        <h1>{this.state.detectInfo}</h1>
        <button onClick = {this.capture}>Click ME</button>
      </div>
    );
  }
}

export default App;
