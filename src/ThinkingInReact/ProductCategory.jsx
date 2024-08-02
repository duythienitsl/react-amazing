import React, { Component } from 'react';

export class ProductCategory extends Component {
  render() {
    return (
      <tr>
        <th colSpan={2}>{this.props.category}</th>
      </tr>
    );
  }
}

export default ProductCategory;
