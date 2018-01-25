import React, { Component } from 'react';
import AddItems from './addItems';
import ItemList from './itemList';
import SearchItem from './searchItem';
// import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.filteredList = this.filteredList.bind(this);
    this.state = {items : [], searchedItems : []}
  }

  addItem(items){
    // console.log("here", items);
    var curItem = this.state.items;
    curItem.unshift({
      index : curItem.length + 1,
      value : items.newItemValue,
      description : items.newDescription,
      price : items.newPrice
    });
    this.setState({items: curItem});
  }

  removeItem(itemIndex){
    var curItem = this.state.items;
    curItem.splice(itemIndex,1);
    console.log("after delete", curItem);
    //changed here
    this.setState({items: curItem, searchItem : curItem});

  }

  filteredList(event){
    var searchedItems = this.state.items;
    searchedItems = searchedItems.filter(
      (item) => {
        // console.log("item ",item);
        // console.log("target ", event.target.value);
        return item.value.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
      }
    );
    // console.log("searchedItems ", searchedItems);
    this.setState({searchedItems: searchedItems});
  }

  componentWillMount(){
    console.log("willMount");
    this.setState({searchedItems: this.state.items})
  }

  // componentDidMount(){
  //   this.setState({searchedItems: this.state.items})
  // }

  render() {
    return (
      <div id="main">
        <SearchItem startSearch = {this.filteredList}/>
        <AddItems addItem = {this.addItem} />
        <ItemList items = {this.state} removeItem = {this.removeItem}/>
      </div>
    );
  }
}

export default App;
