/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react";
// Crear el contexto de autenticación
const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
  const userData = localStorage.getItem("userData");
  const isAdmin = localStorage.getItem("admin") === "true";
  if (userData) {
    setUser(JSON.parse(userData));
    setAdmin(isAdmin);
  }
}, []);

  const login = (userData) => {
  if (userData.email === "admin@gmail.com") {
    setAdmin(true);
    localStorage.setItem("admin", true);
  } else {
    setAdmin(false);
    localStorage.setItem("admin", false);
  }
  localStorage.setItem("userData", JSON.stringify(userData));
  setUser(userData);
};

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    setUser(null);
    setAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, admin }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
