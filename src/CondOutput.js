//Conditional output: only show output that meets certain conditions
import React, { Component} from 'react';

class CondOutput extends Component {
  render() {
    const { foods } = this.props;
    // Method 1
    // const foodList = foods.map(food => {
    //   if (food.qty > 5) {
    //     return (
    //       <div className= "food" key= {food.id}> 
    //         <p>Name: { food.name }</p>
    //         <p>Qty: { food.qty }</p>
    //       </div>
    //     )
    //   } else {
    //     return null
    //   }     
    // })

    //Method 2
    const foodList = foods.map(food => {
      return food.qty > 5 ?
        (
          <div className= "food" key= {food.id}> 
            <p>Name: { food.name }</p>
            <p>Qty: { food.qty }</p>
          </div>
        ):
        null;
    })
    return (
      <div className="food-list">
        <h1>CondOutput</h1>
        { foodList }
      </div>
    )
  }
 }

export default CondOutput