import React, { Compontnent } from 'react';

class SearchItem extends React.Component {
  constructor(props){
    super(props);
  }

  onInputChange(event){
    console.log(event.target.value);
    this.props.startSearch(event);
  }

  render(){
    return (
      <input type = "text"
        className = "searchAnItem"
        placeholder = "Search An Item"
        onChange = {this.onInputChange.bind(this)}
      />
    )
  }
}

export default SearchItem;
