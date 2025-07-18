import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import Admin from "./components/Admin";
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
import { Link } from "react-router-dom";
import loginLogo from "/imgs/login.png";
import FormEdit from "./components/FormEdit";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

function App() {
  const { user, admin } = useAuthContext();
  const { cartItems } = useCartContext();
  /* ESTADOS */
  const [visualCart, setVisualCart] = useState(false);

  const handleCartClick = () => {
    setVisualCart(!visualCart);
  };
  /*Funciones Carrito que iran al Contexto*/

  return (
    <Router className="App">
      <ScrollToTop />
      <div className="nav-order">
        <Nav />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      <Routes>
        <Route path="/" element={<Home cartItems={cartItems} />} />

        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        {admin ? <Route path="/admin" element={<Admin />} /> : <Route path="/admin" element={<Navigate to="/login" />} />}
        {admin && <Route path="/admin/editar" element={<FormEdit />} />}
        {admin && <Route path="/admin/editar/:id" element={<FormEdit />} />}
      </Routes>

      {/* Botón de carrito global */}
      <button className="cart-btn" onClick={handleCartClick}>
        <img src={cartIcon} alt="Cart" />
        {cartItems.length > 0 && (
          <span className="cart-count">{cartItems.length}</span>
        )}
      </button>

      {/*Footer global*/}
      <Footer />

      {/* Modal de carrito accesible globalmente */}
      {user ? (
        <div className={`cart-modal ${visualCart ? "show" : ""}`}>
          <button className="close-cart-btn" onClick={handleCartClick}>
            &times;
          </button>
          <CartView cartItems={cartItems} />
        </div>
      ) : (
        <div className={`cart-modal ${visualCart ? "show" : ""}`}>
          <button className="close-cart-btn" onClick={handleCartClick}>
            &times;
          </button>
          <div className="cart-login-prompt">
            <h1>Inicia sesión para ver tu carrito</h1>
            <Link to="/login" className="default-btn">
              <img src={loginLogo} alt="Iniciar Sessión" width={25} height={25} />
              Login
            </Link>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
