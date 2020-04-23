import React, { Component } from 'react';
import './App.css';
var momenttz = require("moment-timezone");
var zipcode_to_timezone = require( 'zipcode-to-timezone' );

class App extends Component {



constructor(){
  super();
  state = {  }

}
  


  render() { 
    return (  
      <div>
        <input type="text" id="userinput" />


      </div>
    );
  }
}
 
export default App;