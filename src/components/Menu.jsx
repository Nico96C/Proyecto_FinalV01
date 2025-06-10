import { Link } from "react-router-dom";
import "../App.css";
import { useCartContext } from "../contexts/CartContext";
import { useProducts } from "../contexts/ProductsContext";

function Menu() {

  const { agregarAlCarrito } = useCartContext();
  const { products } = useProducts();

  const arrayProductos = products;

  const productosA = arrayProductos.filter(
    (producto) => producto.category === "Entrante"
  );

  const productosB = arrayProductos.filter(
    (producto) => producto.category === "Principal"
  );

  const productosC = arrayProductos.filter(
    (producto) => producto.category === "Postre"
  );

  const productosD = arrayProductos.filter(
    (producto) => producto.category === "Bebida"
  );

  return (
    <div className="container" style={{ justifyContent: "unset", alignItems: "unset", padding: "0" }}>
      <h1 className="title" id="menu">
        MENU
      </h1>
      <div className="container-menu">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Platos Entrantes
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {productosA.map((producto) => (
                  <div key={producto.id} className={`cards-menu`}>
                      <img
                        src={producto.img}
                        alt={producto.name}
                        className="img-card-product"
                      />
                    <h5 className="menu-title">{producto.name}</h5>
                    <p className="limited-text">{producto.description}</p>
                    <p> € {producto.price}</p>
                    <div className="btn-space"></div>
                    <button
                      id={producto.id}
                      className="btn-buy-2"
                      onClick={() => agregarAlCarrito(producto)}
                    >
                      Agregar Pedido
                    </button>
                    <button
                      className="toggle-btn"
                    >
                      <Link to={`/menu/${producto.id}`} className="btn-info">Info</Link>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Platos Principales
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {productosB.map((producto) => (
                  <div key={producto.id} className={`cards-menu`}>
                    <img
                      src={producto.img}
                      alt={producto.name}
                      className="img-card-product"
                    />
                    <h5 className="menu-title">{producto.name}</h5>
                    <p className="limited-text">{producto.description}</p>
                    <p> € {producto.price}</p>
                    <div className="btn-space"></div>
                    <button
                      id={producto.id}
                      className="btn-buy-2"
                      onClick={() => agregarAlCarrito(producto)}
                    >
                      Agregar Pedido
                    </button>
                    <button
                      className="toggle-btn"
                    >
                      <Link to={`/menu/${producto.id}`} className="btn-info">Info</Link>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Platos de Postre
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {productosC.map((producto) => (
                  <div key={producto.id} className={`cards-menu`}>
                      <img
                        src={producto.img}
                        alt={producto.name}
                        className="img-card-product"
                      />
                    <h5 className="menu-title">{producto.name}</h5>
                    <p className="limited-text">{producto.description}</p>
                    <p> € {producto.price}</p>
                    <div className="btn-space"></div>
                    <button
                      id={producto.id}
                      className="btn-buy-2"
                      onClick={() => agregarAlCarrito(producto)}
                    >
                      Agregar Pedido
                    </button>
                    <button
                      className="toggle-btn"
                    >
                      <Link to={`/menu/${producto.id}`} className="btn-info">Info</Link>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Bebidas
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {productosD.map((producto) => (
                  <div key={producto.id} className={`cards-menu`}>
                      <img
                        src={producto.img}
                        alt={producto.name}
                        className="img-card-product"
                      />
                    <h5 className="menu-title">{producto.name}</h5>
                    <p className="limited-text">{producto.description}</p>
                    <p> € {producto.price}</p>
                    <div className="btn-space"></div>
                    <button
                      id={producto.id}
                      className="btn-buy-2"
                      onClick={() => agregarAlCarrito(producto)}
                    >
                      Agregar Pedido
                    </button>
                    <button
                      className="toggle-btn"
                    >
                      <Link to={`/menu/${producto.id}`} className="btn-info">Info</Link>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Menu;
