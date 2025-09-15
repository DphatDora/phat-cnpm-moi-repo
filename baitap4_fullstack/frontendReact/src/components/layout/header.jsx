import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth.context.jsx";
import { useCart } from "../context/cart.context.jsx";
import { useWishlist } from "../context/wishlist.context.jsx";

export default function Header() {
  const { token, setToken, user, setUser } = useAuth();
  const { toggleCart, getTotalItems } = useCart();
  const { getWishlistCount } = useWishlist();
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken("");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/products">Product</Link>
        {!token && <Link to="/register">Register</Link>}
        {!token && <Link to="/login">Login</Link>}
        {token && <Link to="/profile">Profile</Link>}
      </nav>

      <div className="header-actions">
        {/* Wishlist Icon */}
        <div className="wishlist-info">
          ❤️ <span className="wishlist-count">({getWishlistCount()})</span>
        </div>
        
        {/* Cart Icon */}
        <button className="cart-toggle" onClick={toggleCart}>
          🛒 <span className="cart-count">({getTotalItems()})</span>
        </button>

        <div className="auth-status">
          {token ? (
            <>
              <span>Xin chào {user?.name || user?.email}</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <span>Chưa đăng nhập</span>
          )}
        </div>
      </div>
    </header>
  );
}
