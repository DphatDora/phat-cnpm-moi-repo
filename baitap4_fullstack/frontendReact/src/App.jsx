import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import Product from "./pages/ProductPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import Header from "./components/layout/header.jsx";
import Cart from "./components/layout/Cart.jsx";
import { AuthProvider, useAuth } from "./components/context/auth.context.jsx";
import { CartProvider } from "./components/context/cart.context.jsx";
import { WishlistProvider } from "./components/context/wishlist.context.jsx";

function PrivateRoute({ children }) {
  const { token } = useAuth();
  if (!token) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <WishlistProvider>
        <CartProvider>
          <Header />
          <Cart />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/products" element={<Product />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route
                path="*"
                element={
                  <div>
                    Not Found. <Link to="/">Go Home</Link>
                  </div>
                }
              />
            </Routes>
          </div>
        </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  );
}
