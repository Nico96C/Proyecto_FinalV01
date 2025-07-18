import { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { obtenerPedidosUsuario, obtenerReservasUsuario, guardarDireccion, obtenerDireccionUsuario } from "../Auth/FirebaseConfig";
import { todosLosProductos } from "../assets/request";
import { toast } from "react-toastify";

function Profile() {
  const { user } = useAuthContext();
  const [pedidos, setPedidos] = useState([]);
  const [reservas, setReservas] = useState([]);

  /* Estados para manejar el formulario de dirección */
  const [nombre, setNombre] = useState("");
  const [direccion1, setDireccion1] = useState("");
  const [direccion2, setDireccion2] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [postal, setPostal] = useState("");

  /* Estado para manejar direcciones */
  const [address, setAddress] = useState([]);

  /* Estado para manejar productos */
  const [loading, setLoading] = useState(true);
  const [productosMap, setProductosMap] = useState({});



  useEffect(() => {
    const fetchPedidosYProductos = async () => {
      setLoading(true);
      try {
        /* Trae todos los productos y crea un mapa id -> nombre */
        const productos = await todosLosProductos();
        const map = {};
        productos.forEach((prod) => {
          map[prod.id] = prod.name;
        });
        setProductosMap(map);

        /* Trae los pedidos y reservas del usuario */
        const pedidosUsuario = await obtenerPedidosUsuario();
        const reservasUsuario = await obtenerReservasUsuario();
        const direccionesUsuario = await obtenerDireccionUsuario();
        setPedidos(pedidosUsuario);
        setReservas(reservasUsuario);
        setAddress(direccionesUsuario);
        console.log("Direcciones actualizadas:", address);
      } catch (error) {
        setPedidos([]);
        setProductosMap({});
        console.error("Error al obtener los pedidos o productos:", error);
      }
      setLoading(false);
    };
    fetchPedidosYProductos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* Validación básica */
    if (!nombre.trim()) {
      alert("El nombre es obligatorio.");
      return;
    }
    if (!direccion1.trim()) {
      alert("La dirección principal es obligatoria.");
      return;
    }
    if (!ciudad.trim()) {
      alert("La ciudad es obligatoria.");
      return;
    }
    if (!localidad.trim()) {
      alert("La localidad es obligatoria.");
      return;
    }
    if (!postal.trim()) {
      alert("El código postal es obligatorio.");
      return;
    }

    try {
      await guardarDireccion(nombre, direccion1, direccion2, ciudad, localidad, postal);
      toast.success("Dirección guardada correctamente.");
      /* Limpia los campos */
      setNombre("");
      setDireccion1("");
      setDireccion2("");
      setCiudad("");
      setLocalidad("");
      setPostal("");
      /* Actualiza la lista de direcciones */
      const direcciones = await obtenerDireccionUsuario();
      setAddress(direcciones);
    } catch (error) {
      toast.error("Error al guardar la dirección. Inténtalo de nuevo.");
    }
  };

  if (!user) {
    return <div>Debes iniciar sesión para ver tu perfil.</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-subcontainer">
        <div className="profile-info">
          <div className="profile-header">
            <h2>Perfil de Usuario</h2>
            <h5>
              <strong> {user.displayName || user.email} </strong>
            </h5>
          </div>
          <div className="profile-address">
            <h3>Direccion de Envios</h3>
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label"> Nombre Completo </label>
                <input type="text" className="form-control" id="inputEmail4"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label"> Dirección Envio 1° </label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Calle y altura"
                  value={direccion1}
                  onChange={(e) => setDireccion1(e.target.value)}
                  required />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label"> Dirección Envio 2° </label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Departamento, piso o entre calles"
                  value={direccion2}
                  onChange={(e) => setDireccion2(e.target.value)}
                  required />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label"> Cuidad </label>
                <input type="text" className="form-control" id="inputCity"
                  value={ciudad}
                  onChange={(e) => setCiudad(e.target.value)}
                  required />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label"> Localidad </label>
                <input type="text" className="form-control" id="inputState"
                  value={localidad}
                  onChange={(e) => setLocalidad(e.target.value)}
                  required />
              </div>
              <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label"> Codigo Postal </label>
                <input type="text" className="form-control" id="inputZip"
                  value={postal}
                  onChange={(e) => setPostal(e.target.value)}
                  required />
              </div>
              <div className="col-12">
                <button type="submit" className="default-btn">Agregar dirección +</button>
              </div>
            </form>
            <div className="profile-line" />
            {address.length === 0 ? (
              <p>No tienes direcciones registradas.</p>
            ) : (
              <ul>
                {address.map((dir, index) => (
                  <li key={index}>
                    <strong>Nombre:</strong> {dir.name}
                    <br />
                    <strong>Dirección:</strong> {dir.address1}
                    <br />
                    <strong>Ciudad:</strong> {dir.city}
                    <br />
                    <strong>Código Postal:</strong> {dir.zip}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="profile-orders">
          {loading ? (
            <p>Cargando datos...</p>
          ) : pedidos.length === 0 && reservas.length === 0 ? (
            <p>No tienes pedidos registrados.</p>
          ) : (
            <div>
              <h3>Mis Reservas</h3>
              <ul>
                {reservas.map((reserva) => (
                  <li key={reserva.id}>
                    <strong>Nombre:</strong> {reserva.name}
                    <br />
                    <strong>Cantidad de Personas:</strong> {reserva.people}
                    <br />
                    <strong>Fecha:</strong> {reserva.date || "Sin fecha"}
                    <br />
                    <strong>Total:</strong> €{reserva.total}
                    <br />
                    <strong>Estado:</strong> {reserva.state}
                  </li>
                ))}
              </ul>
              <h3>Mis Pedidos</h3>
              <ul>
                {pedidos.map((pedido) => (
                  <li key={pedido.id}>
                    <strong>Fecha:</strong>{" "}
                    {pedido.date?.toDate?.().toLocaleString?.() || "Sin fecha"}
                    <br />
                    <strong>Estado:</strong> {pedido.state}
                    <br />
                    <strong>Productos:</strong>{" "}
                    {pedido.products
                      .map((id) => productosMap[id] || id)
                      .join(", ")}
                    <br />
                    <strong>Total:</strong> ${pedido.total}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
