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

function Home() {

  const { agregarAlCarrito } = useCartContext();
  const { products } = useProducts();
  const { loading, loadingPercent } = useProducts();

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

  const notify = () => {
    toast.dismiss();
    toast.success("Producto Agregado al Carrito!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };

  return (
    <>
      <HeadTop />

      <main>
        <div className="sub-container">
          <h1 className="title">
            {" "}
            Restaurante La Sevillana{" "}
          </h1>

          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="carousel-content">
                  <img
                    src="https://ik.imagekit.io/m3g4ID/Proyecto-TalentoTech/1.jpg?updatedAt=1745422071465"
                    className="d-block w-50"
                    alt="restaurante-exterior"
                  />
                  <div className="carousel-text">
                    <h2>Texto para la primera imagen</h2>
                    <p>Descripción adicional para la primera imagen.</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-content">
                  <img
                    src="https://ik.imagekit.io/m3g4ID/Proyecto-TalentoTech/2.jpg?updatedAt=1745422071727"
                    className="d-block w-50"
                    alt="restaurante-parrilla-1"
                  />
                  <div className="carousel-text">
                    <h2>Texto para la segunda imagen</h2>
                    <p>Descripción adicional para la segunda imagen.</p>
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
                    src="https://ik.imagekit.io/m3g4ID/Proyecto-TalentoTech/4.jpg?updatedAt=1745422073968"
                    className="d-block w-50"
                    alt="restaurante-cocina"
                  />
                  <div className="carousel-text">
                    <h2>Texto para la cuarta imagen</h2>
                    <p>Descripción adicional para la cuarta imagen.</p>
                  </div>
                </div>
              </div>
            </div>
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
              {productosA.slice(0, 4).map((producto) => (
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
                      notify();
                    }}
                  >
                    Agregar al carrito
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="products">
            <h2 className="subtitle-menus">Principales</h2>
            <div className="cards-container">
              {productosB.slice(0, 4).map((producto) => (
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
                      notify();
                    }}
                  >
                    Agregar al carrito
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="products">
            <h2 className="subtitle-menus">Postres</h2>
            <div className="cards-container">
              {productosC.slice(0, 4).map((producto) => (
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
                      notify();
                    }}
                  >
                    Agregar al carrito
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="products">
            <h2 className="subtitle-menus">Bebidas</h2>
            <div className="cards-container">
              {productosD.slice(0, 4).map((producto) => (
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
                      notify();
                    }}
                  >
                    Agregar al carrito
                  </button>
                </div>
              ))}
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
