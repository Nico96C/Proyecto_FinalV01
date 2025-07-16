import { useState } from "react";
import FormProducts from "./FormProducts";
import ModalSelect from "./ModalSelect";
import { MdLibraryAdd, MdOutlineSystemUpdateAlt } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import ModalDelete from "./ModalDelete";

export default function Admin() {
  const [modal, setModal] = useState(null);

  return (
    <div className="container-admin">
      <div className="admin-control-panel">
        <div>
          <h1 className="title-admin">Admin</h1>
          <p>Bienvenido al panel de administración.</p>
        </div>
        <button className="Admin-btn" onClick={() => setModal("agregar")}>
          <MdLibraryAdd /> Agregar Producto
        </button>
        <button className="Admin-btn" onClick={() => setModal("eliminar")}>
          <TiDeleteOutline /> Eliminar Producto
        </button>
        <button className="Admin-btn" onClick={() => setModal("modificar")}>
          <MdOutlineSystemUpdateAlt /> Modificar Producto
        </button>
        <button className="Admin-btn" onClick={() => setModal("pedidos")}>Ver Pedidos</button>
      </div>
      <div className="panel-bg">
        <div className="panel-content">
          {modal === null && <div className="panel-placeholder">Selecciona una opción para comenzar.</div>}
          {modal === "agregar" && <FormProducts />}
          {modal === "eliminar" && <ModalDelete />}
          {modal === "modificar" && <ModalSelect />}
          {modal === "pedidos" && <div>Listado de Pedidos</div>}
        </div>
      </div>
    </div>
  );
}
