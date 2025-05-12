import { Link } from "react-router-dom";
import "../App.css";

function Menu({ addCart, products }) {
  const arrayProductos = products;

  return (
    <div className="container">
      <h1 className="title" id="menu">
        MENU
      </h1>
      <div className="container-products">
        {arrayProductos.map((producto) => (
          <div key={producto.id} className="cards">
            <a
              href="#!"
              tabIndex="0"
              className="btn btn-lg popover-dismiss"
              role="button"
              data-bs-placement="bottom"
              data-bs-toggle="popover"
              data-bs-trigger="focus"
              data-bs-content={producto.description}
              title={producto.title}
            >
              info
            </a>
            <Link to={`/menu/${producto.id}`}>
              <img
                src={producto.img}
                alt={producto.name}
                className="img-card-product"
              />
            </Link>
            <h5>{producto.name}</h5>
            <p>{producto.description}</p>
            <p>${producto.price}</p>
            <div className="btn-space"></div>
            <button
              id={producto.id}
              className="btn-buy"
              onClick={() => addCart(producto)}
            >
              Agregar Pedido +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
