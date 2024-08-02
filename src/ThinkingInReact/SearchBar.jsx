import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    const { searchText, inStock, handleChange } = this.props;
    console.log(this.props);
    return (
      <div>
        <form>
          <input type='text' name='searchText' placeholder='Search...' onChange={handleChange} value={searchText} />
          <div>
            <input type='checkbox' name='inStock' onChange={handleChange} value={inStock} /> Only show products in stock
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
