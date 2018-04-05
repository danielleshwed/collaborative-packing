import React, { Component } from 'react';

class Item extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.weight}</h2>
      </div>
    );
  }
}

export default Item;
