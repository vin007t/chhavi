// src/ProductList.js
import React, { useState } from 'react';
import Product from './Product';

const initialProducts = [
  {
    id: 1,
    name: 'Product 1',
    originalPrice: 59.99,
    discountedPrice: 29.99,
    images: ['https://m.media-amazon.com/images/I/81fsQhNcpdL._AC_UF1000,1000_QL80_.jpg', 'https://m.media-amazon.com/images/I/81FgpASczoL._SX679_.jpg']
  },
  {
    id: 2,
    name: 'Product 2',
    originalPrice: 79.99,
    discountedPrice: 39.99,
    images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150/FF0000']
  },
  {
    id: 3,
    name: 'Product 3',
    originalPrice: 99.99,
    discountedPrice: 49.99,
    images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150/00FF00']
  },
  {
    id: 4,
    name: 'Product 4',
    originalPrice: 119.99,
    discountedPrice: 59.99,
    images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150/FFFF00']
  },
  {
    id: 5,
    name: 'Product 5',
    originalPrice: 139.99,
    discountedPrice: 69.99,
    images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150/00FFFF']
  },
  {
    id: 6,
    name: 'Product 6',
    originalPrice: 159.99,
    discountedPrice: 79.99,
    images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150/FF00FF']
  },
];

const ProductList = () => {
  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOrder, setSortOrder] = useState('none');

  const sortAndSetProducts = (productsList, order) => {
    const sortedProducts = [...productsList].sort((a, b) => {
      if (order === 'low-to-high') {
        return a.discountedPrice - b.discountedPrice;
      } else if (order === 'high-to-low') {
        return b.discountedPrice - a.discountedPrice;
      }
      return 0; // No sorting
    });
    setFilteredProducts(sortedProducts);
  };

  const handleSortChange = (event) => {
    const order = event.target.value;
    setSortOrder(order);
    sortAndSetProducts(filteredProducts, order);
  };

  return (
    <div className="product-list-container">
      <div className="filter-sort-container">
        <div className="sort-menu">
          <label htmlFor="sort">Sort by Price:</label>
          <select id="sort" onChange={handleSortChange} value={sortOrder}>
            <option value="none">None</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <Product
            key={product.id}
            images={product.images}
            name={product.name}
            originalPrice={product.originalPrice}
            discountedPrice={product.discountedPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
