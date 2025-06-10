import { useEffect, useState } from "react";
import FormProducts from "./FormProducts";
import { Link } from "react-router-dom";
import { todosLosProductos } from "../assets/request";

export default function Admin() {
  const [modal, setModal] = useState(null);

  const closeModal = () => setModal(null);

  useEffect(() => {
    // Fetch products when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await todosLosProductos();
        setProductos(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const [productos, setProductos] = useState([]);

  return (
    <div className="container">
      <h1>Admin</h1>
      <p>Bienvenido al panel de administración.</p>
      <button onClick={() => setModal("agregar")}>Agregar Producto</button>
      <button onClick={() => setModal("eliminar")}>Eliminar Producto</button>
      <button onClick={() => setModal("modificar")}>Modificar Producto</button>
      <button onClick={() => setModal("pedidos")}>Ver Pedidos</button>

      {/* Modal */}
      {modal && (
        <div className="modal-bg">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
            {modal === "agregar" && <FormProducts onClose={closeModal} />}
            {modal === "eliminar" && <div>Formulario Eliminar Producto</div>}
            {modal === "modificar" && (
              <>
                <div>Formulario Modificar Producto</div>
                <h2> Seleccione producto a modificar </h2>
                <ul>
                  {productos &&
                    productos.map((producto) => (
                      <li key={producto.id}>
                        <Link to={`/admin/editar/${producto.id}`}>
                          {producto.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </>
            )}
            {modal === "pedidos" && <div>Listado de Pedidos</div>}
          </div>
        </div>
      )}
    </div>
  );
}
