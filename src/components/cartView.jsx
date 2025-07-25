import { toast } from "react-toastify";
import { useCartContext } from "../contexts/CartContext";
import { guardarPedido } from "../Auth/FirebaseConfig";

function CartView() {
  const { limpiarCarrito, eliminarDelCarrito, cartItems } = useCartContext();

  const total = cartItems.reduce((acc, item) => acc + Number(item.price) * item.cantidad, 0);

  const handleConfirmarPedido = async () => {
    try {
      /* Obtén los IDs de los productos del carrito */
      const productosIds = cartItems.map((item) => item.id);
      
      /* Llama a la función para guardar el pedido */
      await guardarPedido(productosIds, "pendiente", total);
      toast.success("¡Pedido realizado con éxito!");
      limpiarCarrito();
    } catch (error) {
      console.error("Error al realizar el pedido:", error);
      toast.error("Error al realizar el pedido");
    }
  };

  return (
    <div className="cart-view">
      <div className="cart-header">
        <h1>Lista de Pedidos</h1>
      </div>
      <div className="cart-content-empty">
        {cartItems.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <div className="cart-container">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-card">
                <img src={item.img} alt={item.name} width={175} height={115} />
                <div className="cart-card-body">
                  <h5 className="card-title-cart">{item.name}</h5>
                  <div className="cart-card-actions">
                    <button
                      className="cart-btn-delete"
                      onClick={() => {
                        eliminarDelCarrito(item.id);
                      }}
                    >
                      Eliminar
                    </button>
                    <div className="card-text-cart">
                      x{item.cantidad} / €{(item.price * item.cantidad).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="cart-total">
        <div className="cart-actions">
          <button className="btn btn-danger" onClick={limpiarCarrito}>
            Vaciar Carrito
          </button>
        </div>
        <div className="cart-total-amount">
          {cartItems.length > 0 && (
            <button className="btn btn-success" onClick={handleConfirmarPedido}>
              Confirmar Pedido
            </button>
          )}
          <strong>Total: ${total.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
}

export default CartView;
