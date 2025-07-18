import "../App.css";
import { useState } from "react";
import { toast } from "react-toastify";

function Contact() {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [comentario, setComentario] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      nombre.trim().length < 6 ||
      mail.trim().length < 8 ||
      comentario.trim().length < 12
    ) {
      toast.error("Completa todos los campos correctamente");
      return;
    }

    setNombre("");
    setMail("");
    setComentario("");
    toast.success("¡Se envió el comentario!");
  };

  return (
    <>
      <div className="fullscreen-container">
        <div className="contact">
          <h2> Contactanos </h2>
          <p>Si tienes algun tipo de consulta, escribenos y te ayudaremos!</p>
          <form className="formContact" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">Nombre Completo</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Nombre..."
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">Mail de Contacto</label>
              <input
                type="email"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Mail Contacto..."
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </div>

            <label htmlFor="floatingTextarea"> Comentario </label>
            <textarea
              className="form-control"
              placeholder="Deja aqui tu comentario..."
              id="floatingTextarea"
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
            ></textarea>

            <button type="submit" className="default-btn">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
