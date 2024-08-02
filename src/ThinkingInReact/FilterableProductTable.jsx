import React, { Component } from 'react';
import './FilterableProductTable.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const productListMock = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' }
];

const fetchApi = () => Promise.resolve(productListMock);

export class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      inStock: false,
      searchText: ''
    };
  }

  handleChange = (event) => {
    const { name } = event.target;
    if (name === 'searchText') {
      this.setState({
        searchText: event.target.value
      });
    }

    if (name === 'inStock') {
      this.setState({
        inStock: event.target.checked
      });
    }
  };

  componentDidMount() {
    fetchApi().then((res) => {
      this.setState({
        productList: res
      });
    });
  }

  render() {
    const { productList, inStock, searchText } = this.state;
    return (
      <div className='FilterableProductTable'>
        <SearchBar searchText={searchText} inStock={inStock} handleChange={this.handleChange} />
        <ProductTable productList={productList} searchText={searchText} inStock={inStock} />
      </div>
    );
  }
}

export default FilterableProductTable;
