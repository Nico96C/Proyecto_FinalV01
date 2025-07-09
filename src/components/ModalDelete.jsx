import { todosLosProductos } from "../assets/request";
import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { eliminarProducto } from "../assets/request"; // Asegúrate de tener esta función para eliminar productos
import { useProducts } from "../contexts/ProductsContext";

function ModalDelete() {
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
  const { reloadProducts } = useProducts();

  const handleDelete = (id) => {
    new Promise((resolve, reject) => {
      try {
        eliminarProducto(id);
        setProductos(productos.filter((producto) => producto.id !== id));
        reloadProducts();
        resolve();
      } catch (error) {
        console.error("Error al eliminar el producto:", error);
        reject(error);
      }
    });
  };

  return (
    <>
      <div> Formulario para eliminar producto </div>
      <h2> Seleccione producto para eliminar </h2>
      <ul className="list">
        {productos &&
          productos.map((producto) => (
            <li key={producto.id} className="list-delete">
              <div className="list-delete-item">
                <h5 className="title-delete">{producto.name}</h5>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(producto.id)}
                >
                  <MdDeleteForever />
                </button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default ModalDelete;
