import { Link } from "react-router-dom";
import "../App.css";
import { useCartContext } from "../contexts/CartContext";
import { useProducts } from "../contexts/ProductsContext";
import { useState } from "react";
import agregar from "/imgs/add.png";

function Menu() {
  const { agregarAlCarrito } = useCartContext();
  const { products } = useProducts();

  const [search, setSearch] = useState("");

  // filtro de búsqueda
  const productosFiltrados = products.filter((producto) =>
    producto.name.toLowerCase().includes(search.toLowerCase())
  );


  // Filtrar productos por categoría
  const productosA = productosFiltrados.filter(
    (producto) => producto.category === "Entrante"
  );

  const productosB = productosFiltrados.filter(
    (producto) => producto.category === "Principal"
  );

  const productosC = productosFiltrados.filter(
    (producto) => producto.category === "Postre"
  );

  const productosD = productosFiltrados.filter(
    (producto) => producto.category === "Bebida"
  );

  return (
    <div
      className="container-menu"
    >
      <h1 className="title" id="menu">
        MENU
      </h1>

      <div className="explain-menu">
        <p className="explain-text">
          Filtros e información de los productos del menú.
        </p>
        <img className="simbols-menu" src="https://ik.imagekit.io/m3g4ID/Proyecto-TalentoTech/tabla-alergenos-restaurantes.png?updatedAt=1751297913608" width={625} height={250} />
        <p className="explain-text-2">
          *Los iconos (alérgenos) son símbolos que representan a los 14 alérgenos de declaración obligatoria en la Unión Europea. Estos iconos permiten identificar rápidamente los ingredientes que pueden causar reacciones alérgicas en los comensales, facilitando la lectura de cartas y menús en restaurantes.
        </p>
      </div>



      <div className="menu-seccion-container">

        <div className="filters-menu">
          <div>FILTROS</div>
          <input
            type="text"
            placeholder="Buscar producto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <h2 className="category-menu-title">Entrantes</h2>
        <div className="cards-menu-container">
          {productosA.map((producto) => (
            <div key={producto.id} className={`cards-menu`}>
              <h5 className="menu-title">{producto.name}</h5>
              <p className="limited-text"></p>
              <p> € {producto.price}</p>
              <div className="btn-space"></div>
              <div className="btn-actions">
                <button
                  id={producto.id}
                  className="btn-buy-2"
                  onClick={() => agregarAlCarrito(producto)}
                >
                  <img src={agregar} alt="Agregar al carrito" width={40} height={40} />
                </button>
                <button className="toggle-btn">
                  <Link to={`/menu/${producto.id}`} className="btn-info">
                    Info
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="category-menu-title">Principales</h2>
        <div className="cards-menu-container">
          {productosB.map((producto) => (
            <div key={producto.id} className={`cards-menu`}>
              <h5 className="menu-title">{producto.name}</h5>
              <p className="limited-text"></p>
              <p> € {producto.price}</p>
              <div className="btn-space"></div>
              <div className="btn-actions">
                <button
                  id={producto.id}
                  className="btn-buy-2"
                  onClick={() => agregarAlCarrito(producto)}
                >
                  <img src={agregar} alt="Agregar al carrito" width={40} height={40} />
                </button>
                <button className="toggle-btn">
                  <Link to={`/menu/${producto.id}`} className="btn-info">
                    Info
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="category-menu-title">Postres</h2>
        <div className="cards-menu-container">
          {productosC.map((producto) => (
            <div key={producto.id} className={`cards-menu`}>
              <h5 className="menu-title">{producto.name}</h5>
              <p className="limited-text"></p>
              <p> € {producto.price}</p>
              <div className="btn-space"></div>
              <div className="btn-actions">
                <button
                  id={producto.id}
                  className="btn-buy-2"
                  onClick={() => agregarAlCarrito(producto)}
                >
                  <img src={agregar} alt="Agregar al carrito" width={40} height={40} />
                </button>
                <button className="toggle-btn">
                  <Link to={`/menu/${producto.id}`} className="btn-info">
                    Info
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="category-menu-title">Bebidas</h2>
        <div className="cards-menu-container">
          {productosD.map((producto) => (
            <div key={producto.id} className={`cards-menu`}>
              <h5 className="menu-title">{producto.name}</h5>
              <p className="limited-text"></p>
              <p> € {producto.price}</p>
              <div className="btn-space"></div>
              <div className="btn-actions">
                <button
                  id={producto.id}
                  className="btn-buy-2"
                  onClick={() => agregarAlCarrito(producto)}
                >
                  <img src={agregar} alt="Agregar al carrito" width={40} height={40} />
                </button>
                <button className="toggle-btn">
                  <Link to={`/menu/${producto.id}`} className="btn-info">
                    Info
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default Menu;
