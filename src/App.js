import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/Orders/Orders";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { addToCart, updateQuantity, removeFromCart } from "./utils/cart";
import NotificationUtils from "./utils/notifications";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const { showSuccess, showError, showInfo } = NotificationUtils();

  const handleAddToCart = (product) => {
    const isProductInCart = cartItems.some((item) => item.id === product.id);

    if (isProductInCart) {
      showInfo("This product is already in your cart.");
    } else {
      setCartItems((prevCart) => addToCart(prevCart, product));
      showSuccess("Product successfully added to your cart.");
    }
  };

  const handleUpdateQuantity = (productId, quantity) => {
    setCartItems((prevCart) => updateQuantity(prevCart, productId, quantity));
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prevCart) => removeFromCart(prevCart, productId));
    showInfo("Product has been removed from your cart.");
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar cartCount={cartItems.length} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home addToCart={handleAddToCart} />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  updateQuantity={handleUpdateQuantity}
                  removeItem={handleRemoveItem}
                />
              }
            />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
