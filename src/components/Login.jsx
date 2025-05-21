import { Link } from "react-router-dom";
import "../App.css";
import { useState } from "react";

function Login({ setLoggedUser, setLoggedAdmin, adminLogin, userLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const Logout = () => {
    if (userLogin) {
      setLoggedUser(false);
      alert("Sesión cerrada");
    } else if (adminLogin) {
      setLoggedAdmin(false);
      alert("Sesión cerrada");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "usuario" && password === "3210") {
      setLoggedUser(true);
      setLoggedAdmin(false);
      alert("Bienvenido usuario");
      setError("");
    } else if (username === "admin" && password === "0123") {
      setLoggedAdmin(true);
      setLoggedUser(false);
      alert("Bienvenido Admin");
      setError("");
    } else {
      setError("Usuario o contraseña incorrectos");
      setLoggedUser(false);
      setLoggedAdmin(false);
    }

    setUsername("");
    setPassword("");
  };

  return (
    <div className="container" style={{ justifyContent: "space-evenly" }}>
      <div className="container-login-header">
        <h1>Login</h1>
        <p>Inicia sesión para acceder a tu cuenta.</p>
      </div>
      {userLogin || adminLogin ? (
        <>
          {adminLogin ? (
            <>
              <p>Bienvenido Admin!</p>
              <p>
                Ya tiene acceso al resto de opciones hasta las de administración
              </p>
            </>
          ) : (
            <>
              <p>Bienvenido Usuario!</p>
              <p>
                Ya puede ver el carrito de compra y acceder al resto de opciones
              </p>
            </>
          )}

          <button onClick={Logout}>Cerrar Sesión</button>
        </>
      ) : (
        <form className="login-form" onSubmit={handleSubmit}>
          <label>Usuario</label>
          <input
            type="text"
            name="username"
            placeholder="usuario..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="contraseña..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit">Login</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      )}

      <p>
        {adminLogin ? (
          <Link to="/admin">Admin Menu</Link>
        ) : (
          <Link to="/menu">Ir a Menu</Link>
        )}
      </p>
      <p>
        ¿No tienes una cuenta? <a href="/register">Regístrate aquí</a>
      </p>

      <div className="container-login-btns">
        {userLogin ? (
          <button onClick={Logout}>Cerrar Sesión de User</button>
        ) : (
          <button onClick={() => setLoggedUser(true)}>Loguear como User</button>
        )}

        {adminLogin ? (
          <button onClick={Logout}>Cerrar Sesión de Admin</button>
        ) : (
          <button onClick={() => setLoggedAdmin(true)}>
            Loguear como Admin
          </button>
        )}
      </div>
    </div>
  );
}

export default Login;
