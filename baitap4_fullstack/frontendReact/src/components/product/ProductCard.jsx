import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cart.context";
import { useWishlist } from "../context/wishlist.context";

export default function ProductCard({ product }) {
  const imageRef = useRef();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const img = imageRef.current;
          img.src = img.dataset.src;
          observer.unobserve(img);
        }
      },
      {
        rootMargin: "50px",
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-link">
        <div className="product-image">
          <button 
            className={`wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
            onClick={handleToggleWishlist}
            title={isInWishlist(product.id) ? "Bỏ khỏi yêu thích" : "Thêm vào yêu thích"}
          >
            {isInWishlist(product.id) ? '❤️' : '🤍'}
          </button>
          <img
            ref={imageRef}
            data-src={`${product.image}`}
            alt={product.name}
            loading="lazy"
          />
        </div>
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p className="price">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.price)}
          </p>
        </div>
      </Link>
      <div className="product-actions">
        <button
          className="btn btn-primary add-to-cart-btn"
          onClick={handleAddToCart}
        >
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
}
