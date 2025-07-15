import "../App.css";
import { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { createUser, loginEmailPass } from "../Auth/FirebaseConfig";
import { toast, Slide } from "react-toastify";

function Login() {
  const [registerName, setRegisterName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const { user, login, logout } = useAuthContext();

  const notify1 = () => {
    toast.dismiss();
    toast.success("Sessión Iniciada", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };

  const notify2 = () => {
    toast.dismiss();
    toast.error("Sessión Cerrada", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };

  // Login con Firebase
  function LoginWithEmailPass(e) {
    e.preventDefault();
    loginEmailPass(username, password)
      .then((userData) => {
        login(userData); // Pasa el objeto completo
        notify1();
        setUsername("");
        setPassword("");
      })
      .catch(() => {
        setErrorMsg("Credenciales incorrectas o usuario no registrado");
      });
  }

  // Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    if (username) {
      LoginWithEmailPass(e);
      console.log("Login con Firebase");
      return;
    }
  };

  // Registro con Firebase
  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      await createUser(username, password, registerName)
      .then((userData) => {
        login(userData); // Pasa el objeto completo
        notify1();
        setUsername("");
        setPassword("");
      })
      .catch(() => {
        setErrorMsg("Error al registrar usuario o Logeo fallido");
      });

      setUsername("");
      setPassword("");
    } catch (error) {
      setErrorMsg("Error al registrar usuario" + error.name);
    }
  };

  // Logout
  const handleLogout = () => {
    logout();
    setUsername("");
    setPassword("");
    notify2();
  };

  return (
    <div className="container-login">

      {user ? (
        <>
          <p>Bienvenido {user.displayName || user.email}!</p>
          <p>Ya puedes acceder a todas las opciones.</p>
          <button onClick={handleLogout}>Cerrar Sesión</button>
        </>
      ) : (
        <div>
          <div className="container-login-header">
            <h1>{showRegister ? "Registro" : "Login"}</h1>
            <p>
              {showRegister
                ? "Crea tu cuenta para acceder a todas las opciones."
                : "Inicia sesión para acceder a tu cuenta."}
            </p>
          </div>
          {!showRegister ? (

            <form className="login-form" onSubmit={handleSubmit}>
              <label>Email</label>
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
              />
              <br />
              <button type="submit">Login</button>
              {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
            </form>
          ) : (
            <form className="login-form" onSubmit={handleRegister}>
              <label>User</label>
              <input
                type="text"
                placeholder="Nombre"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
              />
              <br />
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
