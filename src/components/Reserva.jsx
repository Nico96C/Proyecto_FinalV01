import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

function Reserva() {
  const handleDateClick = (arg) => {
    alert("Reservar para el día: " + arg.dateStr);
  };
  return (
    <div className="container-reserva">
      <h1 className="title-reserva" id="reserva">Reserva</h1>

      <div className="calendar-container">
        <div className="reserva">
          <button className="btn btn-primary" onClick={() => alert("Reservar")}>
            Reservar
          </button>
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
