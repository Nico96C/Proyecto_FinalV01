import { Link } from "react-router-dom";
import { todosLosProductos } from "../assets/request";
import { useEffect, useState } from "react";

function ModalSelect() {
  useEffect(() => {
    // Fetch de productos
    const fetchProducts = async () => {
      try {
        const response = await todosLosProductos();
        setProductos(response);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };
    fetchProducts();
  }, []);

  const [productos, setProductos] = useState([]);

  return (
    <>
      <div>Formulario Modificar Producto</div>
      <h2> Seleccione producto a modificar </h2>
      <ul>
        {productos &&
          productos.map((producto) => (
            <li className="list-select" key={producto.id}>
              <Link className="link-product" to={`/admin/editar/${producto.id}`}>{producto.name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export default ModalSelect;
