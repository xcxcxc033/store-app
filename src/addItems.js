import React, { Component } from 'react';


class AddItems  extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    event.preventDefault();
    console.log("here");
    var newItemValue = this.refs.itemName.value;
    var newDescription = this.refs.description.value;
    var newPrice = this.refs.price.value;

    if(newItemValue || newDescription || newPrice){
      this.props.addItem({newItemValue,newDescription,newPrice});
      // this.props.addDescription({newDescription});
      // this.props.addPrice({newPrice});
      this.refs.form.reset();
    }

  }

  render(){
    return(
      <form ref = "form" onSubmit={this.onSubmit} className = "form-inline">
        <input type = "text" ref = "itemName" className = "itemName" placeholder = "Item Name"/>
        <input type = "text" ref = "description" className = "description" placeholder = "Description"/>
        <input type = "text" ref = "price" className = "price" placeholder = "Price"/>
        <button type = "submit" className = "btn btn-default"> Add </button>
      </form>
    );
  }
}
export default AddItems;
