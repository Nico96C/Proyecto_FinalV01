import { useParams, Link } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";
import { useProducts } from "../contexts/ProductsContext";
import { useAuthContext } from "../contexts/AuthContext";
import { useState } from "react";

function DetallesProducto() {
  const { agregarAlCarrito } = useCartContext();
  const { products } = useProducts();
  const { admin } = useAuthContext();
  const { id } = useParams();

  const [cantidad, setCantidad] = useState(1);

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
          <>
            <label htmlFor="cantidad">Cantidad:</label>
            <select
              id="cantidad"
              value={cantidad}
              className="select-cantidad"
              onChange={e => setCantidad(Number(e.target.value))}
            >
              {[...Array(9)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <button
              className="btn-details"
              onClick={() => agregarAlCarrito(producto, cantidad)}
            >
              Agregar al carrito
            </button>
          </>
        )}
      </div>
      <Link to="/menu" className="btn-back">
        Volver al Menu
      </Link>
    </div>
  );
}

export default DetallesProducto;
