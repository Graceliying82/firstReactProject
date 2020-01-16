import React, { Component} from 'react';
import './App.css';
import ComponentExample from './ComponentExample'
import EventEx from './EventEx'
import PropsEx1 from './PropsEx1'
import PropsEx2 from './PropsEx2'
class App extends Component {
  state = {
    foods: [
      { name: 'apple', qty: 5, id: 1},
      { name: 'chicken', qty: 4, id:2},
      { name: 'bread', qty: 10, id:3}
    ]
  }
  render() {
    return (
      <div className= "app-content"> 
        <ComponentExample />
        <br></br>
        <EventEx></EventEx>
        <br></br>
        <PropsEx1 name="Abby" age="5"/>
        <br></br>
        <PropsEx2 foods={this.state.foods} />
      </div>
    )
  };
 }

export default App;
