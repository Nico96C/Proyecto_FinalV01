import { todosLosProductos } from "../assets/request";
import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { eliminarProducto } from "../assets/request"; // Asegúrate de tener esta función para eliminar productos
import { useProducts } from "../contexts/ProductsContext";

function ModalDelete() {
  useEffect(() => {
    /* Fetch de productos */
    const fetchProducts = async () => {
      try {
        const response = await todosLosProductos();
        setProductos(response);
      } catch (error) {
        toast.error("Error al obtener los productos:", error);
      }
    };
    fetchProducts();
  }, []);

  const [productos, setProductos] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const { reloadProducts } = useProducts();

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  const confirmDelete = (id) => {
    new Promise((resolve, reject) => {
      try {
        setShowConfirm(false);
        eliminarProducto(id);
        setProductos(productos.filter((producto) => producto.id !== id));
        reloadProducts();
        resolve();
      } catch (error) {
        toast.error("Error al eliminar el producto:");
        reject(error);
      }
    });
  };

  const cancelDelete = () => {
    setShowConfirm(false);
    setDeleteId(null);
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
                  onClick={() => handleDeleteClick(producto.id)}
                >
                  <MdDeleteForever />
                </button>
              </div>
            </li>
          ))}
      </ul>
      {showConfirm && (
        <div className="modal-confirm">
          <p>¿Está seguro de eliminar <b>{productos.find(p => p.id === deleteId)?.name || "este producto"}</b>?</p>
          <div className="modal-confirm-actions">
            <button onClick={confirmDelete}>Sí</button>
            <button onClick={cancelDelete}>No</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalDelete;
