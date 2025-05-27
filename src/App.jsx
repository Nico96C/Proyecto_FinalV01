import "./App.css";
import { useState } from "react";
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
import Login from "./components/Login";
import { useAuthContext } from "./contexts/AuthContext";
import { useCartContext } from "./contexts/CartContext";

function App() {

  const { user } = useAuthContext();
  const { cartItems } = useCartContext();
  
  const [visualCart, setVisualCart] = useState(false);
  /* ESTADOS */

  const handleCartClick = () => {
    setVisualCart(!visualCart);
  };
  /*Funciones Carrito que iran al Contexto*/


  return (
    <Router className="App">
      <div className="nav-order">
        <Nav />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Home cartItems={cartItems} />
          }
        />

        <Route
          path="/menu"
          element={<Menu />}
        />
        <Route
          path="/menu/:id"
          element={<Details />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/login"
          element={
            <Login />
          }
        />
        {/*<Route
          path="/admin"
          element={ ? <Admin /> : <Navigate to={"/login"} replace />}
        />*/}
      </Routes>

      {/* Botón de carrito global */}
      <button className="cart-btn" onClick={handleCartClick}>
        <img src={cartIcon} alt="Cart" />
        {cartItems.length > 0 && (
          <span className="cart-count">{cartItems.length}</span>
        )}
      </button>

      {/* Modal de carrito accesible globalmente */}
      {user ? (
        <div className={`cart-modal ${visualCart ? "show" : ""}`}>
          <button className="close-cart-btn" onClick={handleCartClick}>
            &times;
          </button>
          <CartView
            cartItems={cartItems}
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
