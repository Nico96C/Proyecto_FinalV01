import { useNavigate } from "react-router-dom";
import "../App.css";
import { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { createUser, auth } from "../Auth/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const { user, login, logout } = useAuthContext();
  const navigate = useNavigate();

  // Login local (admin) o con Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (username === "admin" && password === "1234") {
      login(username);
      setUsername("");
      setPassword("");
      alert("Bienvenido Admin!");
      navigate("/");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
      login(userCredential.user.email);
      setUsername("");
      setPassword("");
      navigate("/");
    } catch (error) {
      setErrorMsg("Credenciales incorrectas o usuario no registrado.", error.message);
    }
  };

  // Registro con Firebase
  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      await createUser(username, password);
      login(username);
      setUsername("");
      setPassword("");
      alert("Usuario registrado correctamente");
      navigate("/");
    } catch (error) {
      setErrorMsg("Error al registrar usuario: " + (error.message || ""));
    }
  };

  // Logout
  const handleLogout = () => {
    logout();
    alert("Sesión cerrada");
  };

  return (
    <div className="container" style={{ justifyContent: "space-evenly" }}>
      <div className="container-login-header">
        <h1>{showRegister ? "Registro" : "Login"}</h1>
        <p>
          {showRegister
            ? "Crea tu cuenta para acceder a todas las opciones."
            : "Inicia sesión para acceder a tu cuenta."}
        </p>
      </div>
      {user ? (
        <>
          <p>Bienvenido {user}!</p>
          <p>Ya puedes acceder a todas las opciones.</p>
          <button onClick={handleLogout}>Cerrar Sesión</button>
        </>
      ) : (
        <div>
          {!showRegister ? (
            <form className="login-form" onSubmit={handleSubmit}>
              <label>Email o Usuario</label>
              <input
                type="text"
                name="username"
                placeholder="usuario o email..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
              <br />
              <label>Contraseña</label>
              <input
                type="password"
                name="password"
                placeholder="contraseña..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <br />
              <button type="submit">Login</button>
              {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
            </form>
          ) : (
            <form className="login-form" onSubmit={handleRegister}>
              <label>Email</label>
              <input
                type="email"
                name="correo"
                placeholder="email..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
              <br />
              <label>Contraseña</label>
              <input
                type="password"
                name="password"
                placeholder="contraseña..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
              />
              <br />
              <button type="submit" className="btn-register">
                Registrarse
              </button>
              {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
            </form>
          )}
          <button
            className="btn-toggle-form"
            style={{ marginTop: "1rem" }}
            onClick={() => {
              setShowRegister((prev) => !prev);
              setErrorMsg("");
              setUsername("");
              setPassword("");
            }}
          >
            {showRegister
              ? "¿Ya tienes cuenta? Inicia sesión"
              : "¿No tienes cuenta? Regístrate"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
