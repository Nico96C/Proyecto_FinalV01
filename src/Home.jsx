import "./App.css";
import HeadTop from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import resto3 from "/imgs/carousel/3.jpg";
//import productos from "./products.json";
import Footer from "./components/Footer";
import Agenda from "./components/agenda.jsx";
import { Link } from "react-router-dom";

import { ToastContainer, toast, Slide } from "react-toastify";

function Home({ addCart, products }) {

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

          <div id="menu" className="history">
            <h1>MENU</h1>
          </div>
        </div>

        <div className="container-products">
          {products.map((producto) => (
            <div key={producto.id} className="cards">
              <img
                className="img-card-product"
                src={producto.img}
                alt={producto.title}
              />
              <h5>{producto.name}</h5>
              <p className="limited-text">{producto.description}</p>
              <p>${producto.price}</p>
              <div className="btn-space"></div>
              <button className="btn-buy" onClick={() => { addCart(producto); notify(); }}>
                Agregar al carrito
              </button>
            </div>
          ))}
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
        <button className="btn btn-danger" id="btn-menu">
          <Link to="/menu" className="btn-menu">
            Ver Menu Completo
          </Link>
        </button>
      </main>

      <Agenda />

      <Footer />
    </>
  );
}

export default Home;
