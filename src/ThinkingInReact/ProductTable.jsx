import React, { Component } from 'react';
import ProductCategory from './ProductCategory';
import ProductRow from './ProductRow';

export class ProductTable extends Component {
  render() {
    const { productList, searchText, inStock } = this.props;
    console.log('inStock', inStock);
    let lastCategory = null;
    const rows = [];
    productList.forEach((productItem) => {
      if (inStock && !productItem.stocked) {
        return;
      }

      if (productItem.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
        return;
      }

      if (productItem.category !== lastCategory) {
        rows.push(<ProductCategory key={productItem.category} category={productItem.category} />);
      }
      rows.push(<ProductRow key={productItem.name} product={productItem} />);
      lastCategory = productItem.category;
    });
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
