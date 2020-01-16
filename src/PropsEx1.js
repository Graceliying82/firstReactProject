import React, { Component} from 'react';

class PropsEx1 extends Component {
  render() {
    const {name, age} = this.props;
    return (
      <div className= "PropsEx1"> 
        <h1>propsEx1</h1>
        <p>Name: { name }</p>
        <p>Age: { age }</p>
      </div>
    )
  }
 }

export default PropsEx1