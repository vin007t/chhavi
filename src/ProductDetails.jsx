// src/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  // Mock data - replace with real data fetching
  const product = {
    id,
    name: 'Product ' + id,
    description: 'This is a detailed description of Product ' + id,
    images: [
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300/0000FF',
      'https://via.placeholder.com/300/FF0000',
    ],
    originalPrice: 99.99,
    discountedPrice: 49.99,
  };

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <div className="image-gallery">
        {product.images.map((imgSrc, index) => (
          <img key={index} src={imgSrc} alt={product.name} className="product-image" />
        ))}
      </div>
      <p className="original-price">${product.originalPrice.toFixed(2)}</p>
      <p className="discounted-price">${product.discountedPrice.toFixed(2)}</p>
      <p>{product.description}</p>
      <button className="add-to-cart">Add to Cart</button>
      <button className="add-to-wishlist">Add to Wishlist</button>
    </div>
  );
};

export default ProductDetails;
