// src/Product.js
import React, { useState, useRef, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Product = ({ images, name, originalPrice, discountedPrice }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [isVisible, setIsVisible] = useState(false);
  const productRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (productRef.current) {
      observer.observe(productRef.current);
    }

    return () => {
      if (productRef.current) {
        observer.unobserve(productRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (images.length > 1) {
      setCurrentImage(images[1]);
    }
  };

  const handleMouseLeave = () => {
    setCurrentImage(images[0]);
  };

  const handleAddToCart = () => {
    // Implement add to cart functionality here
    alert(`Added ${name} to cart!`);
  };

  return (
    <div
      ref={productRef}
      className={`product ${isVisible ? 'fade-in' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={currentImage} alt={name} />
      <h2>{name}</h2>
      <div className="price-container">
        <p className="original-price">${originalPrice.toFixed(2)}</p>
        <p className="discounted-price">${discountedPrice.toFixed(2)}</p>
        <button className="add-to-cart" onClick={handleAddToCart}>
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default Product;
