import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth.context.jsx";

export default function Header() {
  const { token, setToken, user, setUser } = useAuth();
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
    </header>
  );
}
