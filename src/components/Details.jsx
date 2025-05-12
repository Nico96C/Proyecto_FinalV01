import { useParams, Link } from "react-router-dom";


function DetallesProducto({ products, addCart }) {
  const { id } = useParams();
  const producto = products.find((item) => parseInt(item.id) === parseInt(id));

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="container">
      <div className="detalles-producto">
        <h2>{producto.name}</h2>
        <p>{producto.description}</p>
        <p>Precio: ${producto.price}</p>
        <button className="btn btn-primary" onClick={() => addCart(producto)}>
          Agregar al carrito
        </button>
      </div>
      <Link to="/menu" className="btn">
        Volver al Menu
      </Link>
    </div>
  );
}

export default DetallesProducto;
