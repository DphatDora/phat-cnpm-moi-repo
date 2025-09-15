import React from "react";
import { useCart } from "../context/cart.context";

export default function Cart() {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getFormattedTotalPrice,
    getTotalItems,
  } = useCart();

  if (!isCartOpen) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <div className="cart-overlay" onClick={closeCart}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>Giỏ hàng ({getTotalItems()})</h3>
          <button className="close-btn" onClick={closeCart}>
            ×
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>Giỏ hàng của bạn đang trống</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>

                    <div className="item-info">
                      <h4 className="item-name">{item.name}</h4>
                      <p className="item-price">{formatPrice(item.price)}</p>

                      <div className="quantity-controls">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="quantity-btn"
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="quantity-btn"
                        >
                          +
                        </button>
                      </div>

                      <p className="item-total">
                        Tổng: {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="remove-btn"
                    >
                      Xóa
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <strong>Tổng cộng: {getFormattedTotalPrice()}</strong>
                </div>

                <div className="cart-actions">
                  <button onClick={clearCart} className="btn btn-secondary">
                    Xóa tất cả
                  </button>
                  <button className="btn btn-primary">Thanh toán</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
