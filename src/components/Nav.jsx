import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { useProducts } from "../contexts/ProductsContext";
import loadingScreen from "/imgs/loading.png";

import loginLogo from "/imgs/login.png";
import logoutLogo from "/imgs/Logout.png";

function Nav() {
  /* Estados para manejar el menú y la visibilidad del header */
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { user, logout, admin } = useAuthContext();
  const { loading, loadingPercent } = useProducts();

  useEffect(() => {
    if (isMobile) return;
    /* Para mostrar o no el header al hacer Scroll */
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
  }, [lastScrollY, isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setMenuOpen(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = () => {
    if (isMobile) setMenuOpen(false);
  };

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
      <nav className={`navbar-1${isMobile ? " mvl" : ""}${isMobile && menuOpen ? " open" : ""}`}>
        <ul className="nav-list">
          <li className="nav-element">
            <Link className="nav-links" to="/" onClick={handleNavClick}>
              INICIO
            </Link>
          </li>
          <li className="nav-element">
            <a className="nav-links" href="#historia" onClick={handleNavClick}>
              HISTORIA
            </a>
          </li>
          <li className="nav-element">
            <a className="nav-links" href="#menu" onClick={handleNavClick}>
              MENU
            </a>
          </li>
          <li className="nav-element">
            <a className="nav-links" href="#reserva" onClick={handleNavClick}>
              RESERVA
            </a>
          </li>
          <li className="nav-element">
            <Link className="nav-links" to="/contact" onClick={handleNavClick}>
              CONTACTO
            </Link>
          </li>
          {admin && <li className="nav-element">
            <Link className="nav-links" to="/admin" onClick={handleNavClick}>
              ADMIN
            </Link>
          </li>}
          <li className="nav-element-login">
            {user ? (
              <button className="default-btn" onClick={logout}>
                <img src={logoutLogo} alt="Cerrar Sessión" width={25} height={25} />
                Logout
              </button>
            ) : (
              <Link className="default-btn" to="/login" onClick={handleNavClick}>
                <img src={loginLogo} alt="Iniciar Sessión" width={25} height={25} />
                Login
              </Link>
            )}
            {user && (
              <Link className="nav-link-profile" to="/profile" onClick={handleNavClick}>
                Perfil
              </Link>
            )}
          </li>
        </ul>
        {isMobile && (
          <button
            className="navbar-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Abrir/Cerrar menú"
          >
            {menuOpen ? "▲" : "▼"}
          </button>
        )}
      </nav>
    </header>
  );
}

export default Nav;
