import React, { Component } from "react";
import "./App.css";
import Selapsed from "./components/Selapsed";
import Profiles from "./components/profiles";
import Clock from "./components/Clock";

class App extends Component {
  render() {
    return (
      <div>
         <Clock />
        <Profiles />
        <Selapsed />
       
        
      </div>
    );
  }
}

export default App;
