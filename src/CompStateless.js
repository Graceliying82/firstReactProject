import React from 'react';

// For stateless component we couldn't add state to it. Usually used in UI
const CompStateless = (props) => {
  return (
    <div className= "CompStateless">
      <h1>Stateless Component</h1>
      <div>Name: {props.name}</div>
      <div>Age: {props.age}</div>
    </div>
  )
 }

export default CompStateless