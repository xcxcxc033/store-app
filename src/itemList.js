import React, { Component } from 'react';
import EachItem from './eachItem';

// var items = this.props.items.map((item, index) => {
//   return (
//     <EachItem key = {index} item = {item} removeItem = {this.props.removeItem} />
//   );
// });
//
// return (
//   <ul className="list-group"> {items} </ul>
// );

class ItemList extends React.Component{


  render(){
    console.log("print  ", this.props);
    var items = this.props.items.searchedItems.map((item, index) => {
      return (
        <EachItem key = {index} item = {item} index = {index} removeItem = {this.props.removeItem} />
      );
    });

    return (
      <ul className="list-group"> {items} </ul>
    );
  }
}

export default ItemList;
