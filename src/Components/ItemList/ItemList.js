import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from './actions';

import Item from '../Item/Item';

class ItemList extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchItems();
  }

  render() {
    return (
      <div>
        {this.props.items.map((item) => {
          return (
            <Item name={item.name} weight={item.weight} />
          )
        })}
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchItems: () => dispatch(fetchItems())
  }
}

export function mapStateToProps(state) {
  return {
    items: state.itemsReducer.items
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
