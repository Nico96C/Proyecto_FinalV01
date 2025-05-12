import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./Home";
import Nav from "./components/Nav";
import CartView from "./components/cartView";
import cartIcon from "/imgs/cart.png";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [visualCart, setVisualCart] = useState(false);

  const addCart = (producto) => {
    setCartItems((prevItems) => [...prevItems, producto]);
  };

  const deleteFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleCartClick = () => {
    setVisualCart(!visualCart);
  };

  return (
    <Router>
      <div className="nav-order">
        <Nav />
      </div>
      <Routes>
        <Route
          path="/"
          element={<Home addCart={addCart} cartItems={cartItems} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Botón de carrito global */}
      <button className="cart-btn" onClick={handleCartClick}>
        <img src={cartIcon} alt="Cart" />
        {cartItems.length > 0 && (
          <span className="cart-count">{cartItems.length}</span>
        )}
      </button>

      {/* Modal de carrito accesible globalmente */}
      <div className={`cart-modal ${visualCart ? "show" : ""}`}>
        <button className="close-cart-btn" onClick={handleCartClick}>
          &times;
        </button>
        <CartView cartItems={cartItems} deleteFromCart={deleteFromCart} clearCart={clearCart} />
      </div>
    </Router>
  );
}

export default App;
