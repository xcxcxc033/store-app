import React, { Component } from 'react';

class EachItem extends React.Component {
  constructor(props){
    super(props);
    this.onClickCloseItem = this.onClickCloseItem.bind(this);
  }

  onClickCloseItem(){
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  }

  render(){
    return (
      <div>
        <h3>{this.props.item.value}  {this.props.item.description} {this.props.item.price}</h3>
        <button onClick = {this.onClickCloseItem}>x</button>
      </div>
    )

  }
}
export default EachItem;
