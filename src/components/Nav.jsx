import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { useProducts } from "../contexts/ProductsContext";
import loadingScreen from "/imgs/loading.png";

function Nav() {

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { user, logout } = useAuthContext();
  const { loading, loadingPercent } = useProducts();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  if (loading) {
      return (
        <div className="loading-screen">
          <img
            src={loadingScreen}
            className="loading-img"
            width={100}
            height={100}
          />
          <p className="loading-percent">{loadingPercent} %</p>
        </div>
      );
    }

  return (
    <header
      className={`header ${isVisible ? "header-visible" : "header-hidden"}`}
    >
      <nav className="navbar-1">
        <ul className="nav-list">
          <li className="nav-element">
            <Link className="nav-links" to="/">
              INICIO
            </Link>
          </li>
          <li className="nav-element">
            <a className="nav-links" href="#historia">
              HISTORIA
            </a>
          </li>
          <li className="nav-element">
            <a className="nav-links" href="#menu">
              MENU
            </a>
          </li>
          <li className="nav-element">
            <a className="nav-links" href="#reserva">
              RESERVA
            </a>
          </li>
          <li className="nav-element">
            <Link className="nav-links" to="/contact">
              CONTACTO
            </Link>
          </li>
          <li className="nav-element-login">
            { user ? (
              <button className="login" onClick={logout}>
                CERRAR SESIÓN
              </button>
            ) : (
              <Link className="login" to="/login">
                 REGISTRO
              </Link>
            )}
            
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
