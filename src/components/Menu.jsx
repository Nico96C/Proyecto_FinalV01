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

  const [alergenoFiltro, setAlergenoFiltro] = useState("");

  const ICONOS_ALERGENOS = {
    "Contiene gluten": "https://ik.imagekit.io/m3g4ID/Proyecto-TalentoTech/Mock-Alergenos/simbolo-alergeno-cereales.png?updatedAt=1752775414689",
    "Crustáceos": "https://ik.imagekit.io/m3g4ID/Proyecto-TalentoTech/Mock-Alergenos/simbolo-alergeno-crustaceo.png?updatedAt=1752777096120",
    "Huevos": "https://ik.imagekit.io/m3g4ID/Proyecto-TalentoTech/Mock-Alergenos/simbolo-alergeno-huevos.png?updatedAt=1752775414697",
    "Pescado": "https://ik.imagekit.io/m3g4ID/Proyecto-TalentoTech/Mock-Alergenos/simbolo-pescado-alergenos.png?updatedAt=1752775416583",
    "Cacahuetes": "https://ik.imagekit.io/m3g4ID/Proyecto-TalentoTech/Mock-Alergenos/simbolo-alergeno-cacahuetes.png?updatedAt=1752777095891",
    "Soja": "https://ik.imagekit.io/m3g4ID/Proyecto-TalentoTech/Mock-Alergenos/simbolo-alergeno-soja.png?updatedAt=1752775415790",
    "Lácteos": "https://ik.imagekit.io/m3g4ID/Proyecto-TalentoTech/Mock-Alergenos/simbolo-alergeno-lacteos.png?updatedAt=1752775414692",
    "Frutos de cáscara": "https://ik.imagekit.io/m3g4ID/Proyecto-TalentoTech/Mock-Alergenos/simbolo-alergeno-frutos-secos.png?updatedAt=1752777095871",
    "Apio": "https://ik.imagekit.io/m3g4ID/Proyecto-TalentoTech/Mock-Alergenos/simbolo-alergeno-apio.png?updatedAt=1752777096007",
    "Mostaza": "https://ik.imagekit.io/m3g4ID/Proyecto-TalentoTech/Mock-Alergenos/simbolo-alergeno-mostaza.png?updatedAt=1752777095697",
    "Granos de sésamo": "https://ik.imagekit.io/m3g4ID/Proyecto-TalentoTech/Mock-Alergenos/simbolo-alergeno-sesamopng.png?updatedAt=1752777096043",
    "Dióxido de azufre y sulfitos": "https://ik.imagekit.io/m3g4ID/Proyecto-TalentoTech/Mock-Alergenos/simbolo-alergeno-sulfitos.png?updatedAt=1752777096102",
    "Moluscos": "https://ik.imagekit.io/m3g4ID/Proyecto-TalentoTech/Mock-Alergenos/simbolo-alergeno-moluscos.png?updatedAt=1752775416582",
    "Altramuces": "https://ik.imagekit.io/m3g4ID/Proyecto-TalentoTech/Mock-Alergenos/simbolo-alergeno-altramuz.png?updatedAt=1752777095567",
    "Sin alérgenos": "https://ik.imagekit.io/m3g4ID/Proyecto-TalentoTech/Mock-Alergenos/Adobe%20Express%20-%20file.png?updatedAt=1752776338780"
  };

  // filtro de búsqueda y alérgenos
  const productosFiltrados = products.filter((producto) =>
    producto.name.toLowerCase().includes(search.toLowerCase()) &&
    (alergenoFiltro === "" || producto.alergeno?.includes(alergenoFiltro))
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
      <h1 className="title-menus" id="menu">
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
          <div>
            <div>FILTROS</div>
            <input
              type="text"
              placeholder="Buscar producto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="filters-alergenos">
            <div className="alergenos-title">ALÉRGENOS</div>
              <div className="alergenos-icons">
                {Object.entries(ICONOS_ALERGENOS).map(([nombre, url]) => (
                  <button
                    key={nombre}
                    type="button"
                    className={`alergeno-item-btn${alergenoFiltro === nombre ? " selected" : ""}`}
                    onClick={() => setAlergenoFiltro(alergenoFiltro === nombre ? "" : nombre)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      outline: alergenoFiltro === nombre ? "2px solid white" : "none"
                    }}
                  >
                    <img src={url} alt={nombre} width={50} height={50} />
                    <p>{nombre}</p>
                  </button>
                ))}
            </div>
          </div>
        </div>


        <h2 className="category-menu-title">Entrantes</h2>
        <div className="cards-menu-container">
          {productosA.map((producto) => (
            <div key={producto.id} className={`cards-menu`}>
              <h5 className="menu-title">{producto.name}</h5>
              <div className="alergenos-producto">
                {producto.alergeno && producto.alergeno.map((nombre) => (
                  ICONOS_ALERGENOS[nombre] && (
                    <img
                      key={nombre}
                      src={ICONOS_ALERGENOS[nombre]}
                      alt={nombre}
                      title={nombre}
                      width={28}
                      height={28}
                      style={{ marginRight: "4px" }}
                    />
                  )
                ))}
              </div>
              <p> € {producto.price}</p>
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
              <div className="alergenos-producto">
                {producto.alergeno && producto.alergeno.map((nombre) => (
                  ICONOS_ALERGENOS[nombre] && (
                    <img
                      key={nombre}
                      src={ICONOS_ALERGENOS[nombre]}
                      alt={nombre}
                      title={nombre}
                      width={28}
                      height={28}
                      style={{ marginRight: "4px" }}
                    />
                  )
                ))}
              </div>
              <p> € {producto.price}</p>
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
              <div className="alergenos-producto">
                {producto.alergeno && producto.alergeno.map((nombre) => (
                  ICONOS_ALERGENOS[nombre] && (
                    <img
                      key={nombre}
                      src={ICONOS_ALERGENOS[nombre]}
                      alt={nombre}
                      title={nombre}
                      width={28}
                      height={28}
                      style={{ marginRight: "4px" }}
                    />
                  )
                ))}
              </div>
              <p> € {producto.price}</p>
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
              <div className="alergenos-producto">
                {producto.alergeno && producto.alergeno.map((nombre) => (
                  ICONOS_ALERGENOS[nombre] && (
                    <img
                      key={nombre}
                      src={ICONOS_ALERGENOS[nombre]}
                      alt={nombre}
                      title={nombre}
                      width={28}
                      height={28}
                      style={{ marginRight: "4px" }}
                    />
                  )
                ))}
              </div>
              <p> € {producto.price}</p>
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
