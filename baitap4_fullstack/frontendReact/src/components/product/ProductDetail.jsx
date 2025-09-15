import React from "react";
import { useCart } from "../context/cart.context";
import { useWishlist } from "../context/wishlist.context";

export default function ProductDetail({ product, soldQuantity }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <div className="product-detail">
      <div className="product-detail-content">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-detail-info">
          <h1 className="product-name">{product.name}</h1>

          <div className="product-price">
            <span className="price">{formatPrice(product.price)}</span>
          </div>

          <div className="product-stats">
            <span className="sold-quantity">Đã bán: {soldQuantity || 0}</span>
            {product.Category && (
              <span className="category">
                Danh mục: {product.Category.name}
              </span>
            )}
          </div>

          <div className="product-description">
            <h3>Mô tả sản phẩm</h3>
            <p>{product.description}</p>
          </div>

          <div className="product-actions">
            <button
              className="btn btn-primary add-to-cart-btn"
              onClick={handleAddToCart}
            >
              Thêm vào giỏ hàng
            </button>
            
            <button
              className={`btn wishlist-btn-detail ${isInWishlist(product.id) ? 'active' : ''}`}
              onClick={handleToggleWishlist}
            >
              {isInWishlist(product.id) ? '❤️ Đã yêu thích' : '🤍 Yêu thích'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
