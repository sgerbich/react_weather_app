import React, { Component } from "react";
import "./App.css";
var momenttz = require("moment-timezone");
var zipcode_to_timezone = require("zipcode-to-timezone");

class App extends Component {
  state = {};
  // constructor(){
  //   super();
  //   state = {  }

  // }
  getTime = () => {
    var zip = document.getElementById("userinput").value;
    var realZip = parseInt(zip);
    var zone = zipcode_to_timezone.lookup(realZip);
    var time = momenttz().tz(zone).format("h:mm:ss a");
    console.log(time);
    console.log();
  };

  getWeather = () => {
    var zip = document.getElementById("userinput").value;
    var realZip = parseInt(zip);
    console.log(process.env.REACT_APP_API_KEY);
    if (zip.length == 5 && typeof realZip === "number") {
      var weather =
        "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?zip=" +
        realZip +
        "&appid=" +
        process.env.REACT_APP_API_KEY;
      console.log(weather);
      fetch(weather)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.setState({weather: data.main.temp});
          
        });
    }else{
      console.log("thats not a number bro")
    }
  };

  render() {
    return (
      <>
        <input type="text" id="userinput" />
        <button onClick={this.getWeather}>GO!</button>
        <div>
          <span id="temp"></span>
        </div>
      </>
    );
  }
}

export default App;
