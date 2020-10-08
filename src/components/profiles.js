import React, { Component } from "react";
import Button from 'react-bootstrap/Button';


class Profiles extends Component {
  constructor(){
      super()
      this.state = { 
        fullName:"khaoula Mahfoudhi",
          bio:"I have a master's degree in computer network.",
          profession:"student in GoMyCode",
          imgSrc: <img className="image" src="./moi.png" alt="myimage" /> ,
          ShowProfile : true
      }
      this.hideMe = this.hideMe.bind(this)
  }
  hideMe = () => {
      
        const { ShowProfile} = this.state;
        this.setState(  {ShowProfile : !ShowProfile})
        
      
  }

  render(){
  return (
      <div >
 <div className="App">
 {this.state.ShowProfile ?
  <div>
        <h1>My Name is  <span id="gear">{this.state.fullName}</span> </h1>
        <h1>
         And  {this.state.bio} </h1>
         <h1> Right now, i'am a  {this.state.profession}</h1>
   <h1>{this.state.imgSrc}</h1> <h1>And this is me </h1>

</div> 
: null 
}
<div>
<Button style={{marginBottom: "8px", marginTop: "8px"}} variant="warning" onClick ={() => this.hideMe()}>Profile
</Button>{' '}
 </div>
 </div>
  </div>
  ) 
  }
}

export default Profiles;
