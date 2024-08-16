import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/Orders/Orders";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { addToCart, updateQuantity, removeFromCart } from "./utils/cart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const isProductInCart = cartItems.some((item) => item.id === product.id);

    if (isProductInCart) {
      toast.info("This product is already in your cart.");
    } else {
      setCartItems((prevCart) => addToCart(prevCart, product));
      toast.success("Product successfully added to your cart.");
    }
  };

  const handleUpdateQuantity = (productId, quantity) => {
    setCartItems((prevCart) => updateQuantity(prevCart, productId, quantity));
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prevCart) => removeFromCart(prevCart, productId));
    toast.info("Product has been removed from your cart.");
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
        {/* <ToastContainer position="bottom-right" /> */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
