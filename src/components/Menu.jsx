import { Link } from "react-router-dom";
import "../App.css";

function Menu({ addCart, products }) {
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

  return (
    <div className="container" style={{ justifyContent: "unset", alignItems: "unset" }}>
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
                Accordion Item #1
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
                      onClick={() => addCart(producto)}
                    >
                      Agregar Pedido
                    </button>
                    <button
                      className="toggle-btn"
                    >
                      <Link to={`/menu/${producto.id}`}>Info</Link>
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
                Accordion Item #2
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
                      onClick={() => addCart(producto)}
                    >
                      Agregar Pedido
                    </button>
                    <button
                      className="toggle-btn"
                    >
                      <Link to={`/menu/${producto.id}`}>Info</Link>
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
                Accordion Item #3
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
                      onClick={() => addCart(producto)}
                    >
                      Agregar Pedido
                    </button>
                    <button
                      className="toggle-btn"
                    >
                      <Link to={`/menu/${producto.id}`}>Info</Link>
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
