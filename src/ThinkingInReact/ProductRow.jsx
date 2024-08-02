import React, { Component } from 'react';

export class ProductRow extends Component {
  render() {
    console.log(this.props.product);
    const { name, price } = this.props.product;
    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    );
  }
}

export default ProductRow;
