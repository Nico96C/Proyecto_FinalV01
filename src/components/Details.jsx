import { useParams, Link } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";
import { useProducts } from "../contexts/ProductsContext";
import { useAuthContext } from "../contexts/AuthContext";

function DetallesProducto() {
  const { agregarAlCarrito } = useCartContext();
  const { products } = useProducts();
  const { admin } = useAuthContext();

  const { id } = useParams();
  const producto = products.find((item) => parseInt(item.id) === parseInt(id));

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="detail-container">
      <div className="detail-producto">
        <h2>{producto.name}</h2>
        <img src={producto.img} width={400} height={250} />
        <p>{producto.description}</p>
        <p>Precio: ${producto.price}</p>
        {admin ? (
          <button
            className="btn-details"
          >
            <Link className="edit-details" to={`/admin/editar/${id}`}> Editar Producto </Link>
          </button>
        ) : (
          <button
            className="btn-details"
            onClick={() => agregarAlCarrito(producto)}
          >
            Agregar al carrito
          </button>
        )}
      </div>
      <Link to="/menu" className="btn-back">
        Volver al Menu
      </Link>
    </div>
  );
}

export default DetallesProducto;
