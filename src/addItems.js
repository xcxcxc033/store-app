import React, { Component } from 'react';


class AddItems from extends Component {
  render(){
    return(
      <form ref = "form" onsubmit={this.onSubmit} classNmae = "form-inline">
        <input type = "text" ref = "itemName" className = "itemName" placeholder = "Item Name">
        <input type = "text" ref = "description" className = "description" placeholder = "Description">
        <input type = "text" ref = "price" className = "price" placeholder = "Price"/>
        <button type = "submit" className = "btn btn-default"> Add </button>
      </form>
    );
  }
}
