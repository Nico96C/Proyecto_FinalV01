import { Link } from "react-router-dom";
import "../App.css";
import { useState } from "react";
import HiddenIcon from "../../public/imgs/hidden";
import ShowIcon from "../../public/imgs/show";

function Menu({ addCart, products }) {
  const arrayProductos = products;

  const [visibleCardId, setVisibleCardId] = useState(false);

  const toggleCardVisibility = (id) => {
    setVisibleCardId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="container">
      <h1 className="title" id="menu">
        MENU
      </h1>
      <div className="container-products">
        {arrayProductos.map((producto) => (
          <div
            key={producto.id}
            className={`cards-menu ${
              visibleCardId === producto.id ? "show" : "hidden"
            }`}
          >
            <Link to={`/menu/${producto.id}`}>
              <img
                src={producto.img}
                alt={producto.name}
                className="img-card-product"
              />
            </Link>
            <h5 className="menu-title">{producto.name}</h5>
            <p className="limited-text">{producto.description}</p>
            <p>${producto.price}</p>
            <div className="btn-space"></div>
            <button
              id={producto.id}
              className="btn-buy-2"
              onClick={() => addCart(producto)}
            >
              Agregar Pedido
            </button>
            <button
              className="toggle-btn"
              onClick={() => toggleCardVisibility(producto.id)}
            >
              {visibleCardId === producto.id ? <HiddenIcon /> : <ShowIcon />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
