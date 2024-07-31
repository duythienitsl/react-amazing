import React, { Component } from 'react';

export class ProductItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className='product-item' key={product.key}>
        <input type='text' />
        {product.name} - {product.avatar}
      </div>
    );
  }
}

export default ProductItem;
