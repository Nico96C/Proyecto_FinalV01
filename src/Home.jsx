import "./App.css";
import HeadTop from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import resto3 from "/imgs/carousel/3.jpg";
import { Link } from "react-router-dom";
import { toast, Slide } from "react-toastify";
import Reserva from "./components/Reserva";
import loadingScreen from "/imgs/loading.png";
import { useCartContext } from "./contexts/CartContext";
import { useProducts } from "./contexts/ProductsContext";
import mark from "/imgs/mark.png";
import { useState } from "react";

function Home() {

  const { agregarAlCarrito } = useCartContext();
  const { products } = useProducts();
  const { loading, loadingPercent } = useProducts();
  const [pageA, setPageA] = useState(0);
  const [pageB, setPageB] = useState(0);
  const [pageC, setPageC] = useState(0);
  const [pageD, setPageD] = useState(0);

  const itemsPerPage = 4;

  const productosA = products.filter(
    (producto) => producto.category === "Entrante"
  );

  const productosB = products.filter(
    (producto) => producto.category === "Principal"
  );

  const productosC = products.filter(
    (producto) => producto.category === "Postre"
  );

  const productosD = products.filter(
    (producto) => producto.category === "Bebida"
  );

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
    <>
      <HeadTop />

      <main>
        <div className="sub-container">
          <h1 className="title">
            {" "}
            Restaurante La Sevillana{" "}
          </h1>

          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="carousel-content">
                  <img
                    src="https://ik.imagekit.io/m3g4ID/Proyecto-TalentoTech/1.jpg?updatedAt=1745422071465"
                    className="d-block w-50"
                    alt="restaurante-parrilla-2"
                  />
                  <div className="carousel-text">
                    <h2>Texto para la tercera imagen</h2>
                    <p>Descripción adicional para la tercera imagen.</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-content">
                  <img
                    src="https://ik.imagekit.io/m3g4ID/Proyecto-TalentoTech/2.jpg?updatedAt=1745422071727"
                    className="d-block w-50"
                    alt="restaurante-parrilla-2"
                  />
                  <div className="carousel-text">
                    <h2>Texto para la tercera imagen</h2>
                    <p>Descripción adicional para la tercera imagen.</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-content">
                  <img
                    src={resto3}
                    className="d-block w-50"
                    alt="restaurante-parrilla-2"
                  />
                  <div className="carousel-text">
                    <h2>Texto para la tercera imagen</h2>
                    <p>Descripción adicional para la tercera imagen.</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-content">
                  <img
                    src="https://ik.imagekit.io/m3g4ID/Proyecto-TalentoTech/5.jpg?updatedAt=1745423020978"
                    className="d-block w-50"
                    alt="restaurante-parrilla-2"
                  />
                  <div className="carousel-text">
                    <h2>Texto para la tercera imagen</h2>
                    <p>Descripción adicional para la tercera imagen.</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="description-container">
            <h1 className="title" id="historia">
              Historia - La Sevillana
            </h1>

            <p className="description">
              La Sevillana es un restaurante encantador ubicado en el corazón de Sevilla, donde cada plato cuenta una historia andaluza. Su menú celebra lo mejor de la gastronomía tradicional, con delicias como el salmorejo, gazpacho andaluz, chipirones a la plancha y el icónico cocido andaluz, preparados con ingredientes frescos y un toque casero que honra las raíces sevillanas.
            </p>

            <p className="description">
              El ambiente cálido y familiar, sumado a un servicio atento y cordial, hacen de La Sevillana el lugar perfecto para disfrutar de una experiencia culinaria auténtica. Ideal tanto para una comida casual como para una velada especial, este restaurante te invita a saborear la esencia de Sevilla en cada visita.
            </p>

            <p className="description">
              En La Sevillana, cada rincón evoca la esencia de Andalucía: azulejos pintados a mano, música flamenca suave de fondo y el aroma tentador de la cocina tradicional que despierta los sentidos. No solo es un restaurante, es una ventana al alma sevillana, donde turistas y locales se encuentran para compartir risas, historias y el placer de una buena mesa.
            </p>
          </div>

          <div id="menu" className="menu-container">
            <h1 className="menu-title-home">MENU</h1>

            <div className="menu-items">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={mark} />
                    <h1> ENTRANTES </h1>
                    <p> Lo mejor en cuanto a entradas tipicas provenientes de Sevilla </p>
                  </div>
                  <div className="flip-card-back">
                    <button className="btn-flipcard">
                      Descargar
                    </button>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={mark} />
                    <h1> PRINCIPALES </h1>
                    <p> Platos de lo mas variado para unas comidas principales con el toque andaluz </p>
                  </div>
                  <div className="flip-card-back">
                    <button className="btn-flipcard">
                      Descargar
                    </button>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={mark} />
                    <h1> POSTRES </h1>
                    <p> Unos postres de alta categoria para cerrar una comida completa </p>
                  </div>
                  <div className="flip-card-back">
                    <button className="btn-flipcard">
                      Descargar
                    </button>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={mark} />
                    <h1> BEBIDAS </h1>
                    <p> Las bebidas mas disfrutables, desde los mejores vinos hasta el agua mas fresca </p>
                  </div>
                  <div className="flip-card-back">
                    <button className="btn-flipcard">
                      Descargar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="products-orders"> LO MAS POPULAR EN PEDIDOS </h1>
        <div className="container-products">
          <div className="products">
            <h2 className="subtitle-menus">Entrantes</h2>
            <div className="cards-container">
              {productosA.slice(pageA * itemsPerPage, (pageA + 1) * itemsPerPage).map((producto) => (
                <div key={producto.id} className="cards">
                  <img
                    className="img-card-product-home"
                    src={producto.img}
                    alt={producto.title}
                  />
                  <h5>{producto.name}</h5>
                  <p className="limited-text">{producto.description}</p>
                  <p> € {producto.price}</p>
                  <div className="btn-space"></div>
                  <button
                    className="btn-buy"
                    onClick={() => {
                      agregarAlCarrito(producto);
                    }}
                  >
                    Agregar al carrito
                  </button>
                </div>
              ))}
            </div>
            <div className="pagination-btns">
              <button
                className="default-btn"
                disabled={pageA === 0}
                onClick={() => setPageA(pageA - 1)}
              >
                Anterior
              </button>
              <button
                className="default-btn"
                disabled={(pageA + 1) * itemsPerPage >= productosA.length}
                onClick={() => setPageA(pageA + 1)}
              >
                Siguiente
              </button>
            </div>
          </div>

          <div className="products">
            <h2 className="subtitle-menus">Principales</h2>
            <div className="cards-container">
              {productosB.slice(pageB * itemsPerPage, (pageB + 1) * itemsPerPage).map((producto) => (
                <div key={producto.id} className="cards">
                  <img
                    className="img-card-product-home"
                    src={producto.img}
                    alt={producto.title}
                  />
                  <h5>{producto.name}</h5>
                  <p className="limited-text">{producto.description}</p>
                  <p> € {producto.price}</p>
                  <div className="btn-space"></div>
                  <button
                    className="btn-buy"
                    onClick={() => {
                      agregarAlCarrito(producto);
                    }}
                  >
                    Agregar al carrito
                  </button>
                </div>
              ))}
            </div>
            <div className="pagination-btns">
              <button
                className="default-btn"
                disabled={pageB === 0}
                onClick={() => setPageB(pageB - 1)}
              >
                Anterior
              </button>
              <button
                className="default-btn"
                disabled={(pageB + 1) * itemsPerPage >= productosB.length}
                onClick={() => setPageB(pageB + 1)}
              >
                Siguiente
              </button>
            </div>
          </div>

          <div className="products">
            <h2 className="subtitle-menus">Postres</h2>
            <div className="cards-container">
              {productosC.slice(pageC * itemsPerPage, (pageC + 1) * itemsPerPage).map((producto) => (
                <div key={producto.id} className="cards">
                  <img
                    className="img-card-product-home"
                    src={producto.img}
                    alt={producto.title}
                  />
                  <h5>{producto.name}</h5>
                  <p className="limited-text">{producto.description}</p>
                  <p> € {producto.price}</p>
                  <div className="btn-space"></div>
                  <button
                    className="btn-buy"
                    onClick={() => {
                      agregarAlCarrito(producto);
                    }}
                  >
                    Agregar al carrito
                  </button>
                </div>
              ))}
            </div>
            <div className="pagination-btns">
              <button
                className="default-btn"
                disabled={pageC === 0}
                onClick={() => setPageC(pageA - 1)}
              >
                Anterior
              </button>
              <button
                className="default-btn"
                disabled={(pageC + 1) * itemsPerPage >= productosC.length}
                onClick={() => setPageC(pageC + 1)}
              >
                Siguiente
              </button>
            </div>
          </div>

          <div className="products">
            <h2 className="subtitle-menus">Bebidas</h2>
            <div className="cards-container">
              {productosD.slice(pageD * itemsPerPage, (pageD + 1) * itemsPerPage).map((producto) => (
                <div key={producto.id} className="cards">
                  <img
                    className="img-card-product-home"
                    src={producto.img}
                    alt={producto.title}
                  />
                  <h5>{producto.name}</h5>
                  <p className="limited-text">{producto.description}</p>
                  <p> € {producto.price}</p>
                  <div className="btn-space"></div>
                  <button
                    className="btn-buy"
                    onClick={() => {
                      agregarAlCarrito(producto);
                    }}
                  >
                    Agregar al carrito
                  </button>
                </div>
              ))}
            </div>
            <div className="pagination-btns">
              <button
                className="default-btn"
                disabled={pageD === 0}
                onClick={() => setPageD(pageD - 1)}
              >
                Anterior
              </button>
              <button
                className="default-btn"
                disabled={(pageD + 1) * itemsPerPage >= productosD.length}
                onClick={() => setPageD(pageD + 1)}
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>
        <div className="btn-menu-complete">
          <Link to="/menu" className="btn-menu">
            Ver Menu Completo
          </Link>
        </div>

        <Reserva />
      </main>
    </>
  );
}

export default Home;
