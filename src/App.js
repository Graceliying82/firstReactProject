import React, { Component} from 'react';
import './App.css';
import ComponentExample from './ComponentExample';
import CompStateless from './CompStateless';
import EventEx from './EventEx';
import PropsEx1 from './PropsEx1';
import PropsEx2 from './PropsEx2';
import CondOutput from './CondOutput';
import AddForm from './AddForm';
class App extends Component {
  state = {
    foods: [
      { name: 'apple', qty: 5, id: 1},
      { name: 'chicken', qty: 4, id:2},
      { name: 'bread', qty: 10, id:3}
    ],
    duckName: 'Dukky',
    duckAge: 'unknown'
  }
  addFood = (food) => {
    food.id = Math.random();
    // Dont use push method to add a new food the Foods. Should do as below
    //1. put the old foods to new foods object AND also add a new food to it 
    let foods = [...this.state.foods, food];
    //2. replace the old foods with new foods
    this.setState({
      foods: foods
    })
  }
  deleteFood = (id) => {
    //Method1
    // let foods = this.state.foods;
    // for (var i = 0; i < foods.length; i++) {
    //   if ( foods[i].id === id) {
    //     foods.splice(i, 1)
    //   }
    // }
    // this.setState({
    //   foods: foods
    // })

    //Method2: use Filter
    let foods = this.state.foods.filter(food =>{
      return food.id !== id
    })
    this.setState({
      foods: foods
    })
  }
  render() {
    return (
      <div className= "app-content"> 
        <ComponentExample />
        <br></br>
        <CompStateless name={this.state.duckName} age={this.state.duckAge} />
        <br></br>
        <EventEx></EventEx>
        <br></br>
        <PropsEx1 name="Abby" age="5"/>
        <br></br>
        <PropsEx2 foods={this.state.foods} deleteFood = {this.deleteFood}/>
        <br></br>
        <CondOutput foods={this.state.foods} />
        <br></br>
        <AddForm addFood= {this.addFood} />
      </div>
    )
  };
 }

export default App;
