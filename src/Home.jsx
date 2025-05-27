import "./App.css";
import HeadTop from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import resto3 from "/imgs/carousel/3.jpg";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Slide } from "react-toastify";
import MarkIcon from "../public/imgs/mark";
import Reserva from "./components/Reserva";
import loadingScreen from "/imgs/loading.png";
import { useCartContext } from "./contexts/CartContext";
import { useProducts } from "./contexts/ProductsContext";

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
          <h1 className="title" id="historia">
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

          <p className="description">
            Esta es una página de prueba para mostrar cómo se puede utilizar
            React con CSS.
          </p>

          <p className="description">
            Puedes agregar más contenido aquí y personalizarlo según tus
            necesidades.
          </p>

          <div id="menu" className="menu-container">
            <h1 className="menu-title-home">MENU</h1>

            <div className="menu-items">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <MarkIcon width={50} height={80} />
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
                    <MarkIcon width={50} height={80}/>
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
                    <MarkIcon width={50} height={80} />
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
            </div>
          </div>
        </div>

        <h1 className="products-orders"> LO MAS POPULAR EN PEDIDOS </h1>
        <div className="container-products">
          <div className="products">
            <h2 className="subtitle-menus">Entrantes</h2>
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

          <div className="products">
            <h2 className="subtitle-menus">Principales</h2>
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

          <div className="products">
            <h2 className="subtitle-menus">Postres</h2>
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

          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
            theme="light"
            transition={Slide}
          />
        </div>
        <div className="btn-menu-complete">
          <Link to="/menu" className="btn-menu">
            Ver Menu Completo
          </Link>
        </div>

        <Reserva />
      </main>


      <Footer />
    </>
  );
}

export default Home;
