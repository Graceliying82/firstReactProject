//This will demo how to use form and button to add a new food
import React, { Component} from 'react';

class AddForm extends Component {
  state = {
    name: null,
    qty: null
  }
  handelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault(); //Preventing refresh the page
    this.props.addFood(this.state)
  }
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor = "name">Name:</label>
          <input type="text" id="name" onChange={this.handelChange}></input>
          <label htmlFor = "qty">Qty:</label>
          <input type="text" id="qty" onChange={this.handelChange}></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
export default AddForm
