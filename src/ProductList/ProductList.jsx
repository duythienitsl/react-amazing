import React, { Component } from 'react';
import ProductItem from './ProductItem';

export class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [
        { id: 'a1', name: 'Sony', avatar: '😄' },
        { id: 'a2', name: 'Apple', avatar: '🤑' },
        { id: 'a3', name: 'Samesung', avatar: '🥰' }
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>ProductList</h1>
        <div className='product-list'>
          {this.state.productList.map((product) => (
            <ProductItem product={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
