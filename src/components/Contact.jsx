import "../App.css";

function Contact() {
  return (
    <>
      <div className="fullscreen-container">
        <div className="contact">
          <h2> Contactanos </h2>
          <p>Si tienes algun tipo de consulta, escribenos y te ayudaremos!</p>
          <form className="formContact">
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">Nombre Completo</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Nombre..." required />
            </div>

            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">Mail de Contacto</label>
              <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="Mail Contacto..." required />
            </div>

            <label htmlFor="floatingTextarea"> Comentario </label>
            <textarea className="form-control" placeholder="Deja aqui tu comentario..." id="floatingTextarea"></textarea>

            <button type="submit" className="default-btn">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
