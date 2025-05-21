import "./App.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Menu from "./components/Menu";
import Details from "./components/Details";
import CartView from "./components/cartView";
import cartIcon from "/imgs/cart.png";
import Admin from "./components/Admin";
import Login from "./components/Login";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [visualCart, setVisualCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [userLogin, setUserLogin] = useState(false);
  const [adminLogin, setAdminLogin] = useState(false);

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

  useEffect(() => {
    fetch("https://682219c0b342dce8004d1dd0.mockapi.io/SevApi/productos")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Router className="App">
      <div className="nav-order">
        <Nav />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Home addCart={addCart} cartItems={cartItems} products={products} />
          }
        />

        <Route
          path="/menu"
          element={<Menu addCart={addCart} products={products} />}
        />
        <Route
          path="/menu/:id"
          element={<Details addCart={addCart} products={products} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/login"
          element={
            <Login
              setLoggedAdmin={setAdminLogin}
              setLoggedUser={setUserLogin}
              userLogin={userLogin}
              adminLogin={adminLogin}
            />
          }
        />
        <Route
          path="/admin"
          element={adminLogin ? <Admin /> : <Navigate to={"/login"} replace />}
        />
      </Routes>

      {/* Botón de carrito global */}
      <button className="cart-btn" onClick={handleCartClick}>
        <img src={cartIcon} alt="Cart" />
        {cartItems.length > 0 && (
          <span className="cart-count">{cartItems.length}</span>
        )}
      </button>

      {/* Modal de carrito accesible globalmente */}
      {userLogin ? (
        <div className={`cart-modal ${visualCart ? "show" : ""}`}>
          <button className="close-cart-btn" onClick={handleCartClick}>
            &times;
          </button>
          <CartView
            cartItems={cartItems}
            deleteFromCart={deleteFromCart}
            clearCart={clearCart}
          />
        </div>
      ) : (
        <div className={`cart-modal ${visualCart ? "show" : ""}`}>
          <button className="close-cart-btn" onClick={handleCartClick}>
            &times;
          </button>
          <h1>Inicia sesión para ver tu carrito</h1>
        </div>
      )}
    </Router>
  );
}

export default App;
