import React, { Component } from "react";
import "./App.css";
import Clocks from "./components/Clocks";
import Profiles from "./components/profiles";
import Clock from "./components/Timing";

class App extends Component {
  render() {
    return (
      <div>
         <Clock />
        <Profiles />
        <Clocks />
       
        
      </div>
    );
  }
}

export default App;
