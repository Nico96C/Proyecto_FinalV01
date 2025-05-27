import { ToastContainer, toast, Slide } from "react-toastify";
import { useCartContext } from "../contexts/CartContext";

function CartView() {

  const { limpiarCarrito, eliminarDelCarrito, cartItems } = useCartContext();

  const notify = () => {
    toast.dismiss();
    console.log("Producto Eliminado!");
    toast.error("Producto Eliminado!", {
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
    <div className="cart-view">
      <div className="cart-header">
        <h1>Lista de Pedidos</h1>
        <button className="btn btn-danger" onClick={limpiarCarrito}>
          Vaciar carrito
        </button>
      </div>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <div className="cart-container">
            {cartItems.map((item, index) => (
              <div key={index} className="card">
                <img src={item.img} alt={item.name} width={50} height={50} />
                <div className="card-body-type">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">${item.price}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => { eliminarDelCarrito(item.id); notify(); }}
                  >
                    Eliminar
                  </button>
                </div>
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
        )}
      </div>
    </div>
  );
}

export default CartView;
