import { Link } from "react-router-dom";
import "../App.css";

function Login({ setLoggedUser, setLoggedAdmin }) {
  return (
    <div>
      <h1>Login</h1>
        <p>Inicia sesión para acceder a tu cuenta.</p>
        <button onClick={setLoggedUser}>Loguear como User</button>
        <button onClick={setLoggedAdmin}>Loguear como Admin</button>
        <Link to="/admin">Admin</Link>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
        <p>¿No tienes una cuenta? <a href="/register">Regístrate aquí</a></p>
    </div>
  );
}

export default Login;