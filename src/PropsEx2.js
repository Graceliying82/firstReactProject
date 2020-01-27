import React, { Component} from 'react';

class PropsEx2 extends Component {
  render() {
    const { foods } = this.props;
    const foodList = foods.map(food => {
      return (
        <div className= "food" key= {food.id}> 
          <p>Name: { food.name }</p>
          <p>Qty: { food.qty }</p>
      {/* () => will prevent the function been called on loading stage */} 
          <button onClick={() => {this.props.deleteFood(food.id)}}>Delete</button>
        </div>
      )
    })
    return (
      <div className="food-list">
        <h1>propsEx2</h1>
        { foodList }
      </div>
    )
  }
 }

export default PropsEx2