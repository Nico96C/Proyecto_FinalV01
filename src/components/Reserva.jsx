import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { guardarReserva } from "../Auth/FirebaseConfig";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import loginLogo from "/imgs/login.png";

function Reserva() {
  const { user } = useAuthContext();
  /* Estados para manejar la reserva */
  const [fechaSeleccionada, setFechaSeleccionada] = useState("");
  const [nombre, setNombre] = useState("");
  const [personas, setPersonas] = useState(0);
  const [error, setError] = useState("");

  const precioPorPersona = 20;
  const total = personas * precioPorPersona;

  const handleDateClick = (arg) => {
    setFechaSeleccionada(arg.dateStr);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hoy = new Date();
    const fechaReserva = new Date(fechaSeleccionada);
    hoy.setHours(0, 0, 0, 0);
    fechaReserva.setHours(0, 0, 0, 0);

    if (!nombre.trim()) {
      setError("El nombre es obligatorio.");
      toast.error(error);
      return;
    }
    if (personas < 1) {
      setError("Debe haber al menos 1 persona.");
      toast.error(error);
      return;
    }
    if (!fechaSeleccionada || fechaReserva <= hoy) {
      setError("La fecha debe ser a futuro.");
      toast.error(error);
      return;
    }

    /*datos para guardar el pedido firebase*/
    try {
      await guardarReserva(nombre, personas, fechaSeleccionada, "pendiente", total);
      setNombre("");
      setPersonas(1);
      setFechaSeleccionada("");
      setError("");
      toast.success("¡Reserva realizada con éxito!");
    } catch (error) {
      console.error("Error al realizar la reserva:", error);
      toast.error("Error al realizar el pedido");
    }

  };

  return (
    <div className="container-reserva">
      <h1 className="title-reserva" id="reserva">
        RESERVA
      </h1>
      <div className="calendar-container">
        <div className="reserva">
          <h2 className="reserva-header">REALIZA TU RESERVA AQUI</h2>
          {user && (
            <form className="reserva-form" onSubmit={handleSubmit}>
              <div className="reserva-form-section">
                <label>Nombre:</label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>
              <div className="reserva-form-section">
                <label>Cantidad de personas:</label>
                <input
                  type="number"
                  min={1}
                  value={personas}
                  onChange={(e) => setPersonas(Number(e.target.value))}
                  required
                />
              </div>
              <div className="reserva-form-section">
                <label>Fecha:</label>
                <input type="text" value={fechaSeleccionada} readOnly />
              </div>
              <div>
                <h3 className="reserva-form-ttl"><strong>Total: €{total}</strong></h3>
              </div>
              <button className="default-btn" type="submit">
                Confirmar Reserva
              </button>
            </form>
          )}
          {!user && (
            <div className="reserva-form-error-container">
              <div className="reserva-form-error">
                Debes iniciar sesión para reservar.
              </div>
              <Link href="/login" className="default-btn">
                <img src={loginLogo} alt="Iniciar Sessión" width={25} height={25} />
                Login
              </Link>
            </div>
          )}
        </div>
        <div className="calendar-wrapper">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            dateClick={handleDateClick}
            selectable={true}
            height="auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Reserva;
