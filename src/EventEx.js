import React, { Component} from 'react';

class EventEx extends Component {
  state = {
    name: "Abby",
    age: 5
  }
  handleClick = (e) =>{
    console.log(e.target);
    console.log( "name :" + this.state.name + " Age: " + this.state.age)
  }
  handleMouseOver(e){
    console.log(e.target);
  }
  render() {
    return (
      <div className= "EventEx"> 
        <h1>Event</h1>
        <button onClick={this.handleClick}>Click Me</button>  
        <button onMouseOver={this.handleMouseOver}>Hover Me</button>
      </div>
    )
  }
 }

export default EventEx