import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <header className={`header ${isVisible ? "header-visible" : "header-hidden"}`}>
      <nav className="navbar-1">
        <ul className="nav-list">
          <li className="nav-element">
            <Link className="nav-links" to="/">INICIO</Link>
          </li>
          <li className="nav-element">
            <a className="nav-links" href="#historia">HISTORIA</a>
          </li>
          <li className="nav-element">
            <a className="nav-links" href="#menu">MENU</a>
          </li>
          <li className="nav-element">
            <a className="nav-links" href="#reserva">RESERVA</a>
          </li>
          <li className="nav-element">
            <Link className="nav-links" to="/contact">CONTACTO</Link>
          </li>
          <li className="nav-element-login">
            <Link className="register" to="#">REGISTRARSE</Link>
            <Link className="login" to="/login">INICIAR SESIÓN</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
