/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react";
// Crear el contexto de autenticación
const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const isAdmin = localStorage.getItem("admin") === "true";
    if (token) {
      const username = token.replace("fake-token-", "");
      setUser(username);
      setAdmin(isAdmin);
    }
  }, []);

  const login = (username) => {
    const token = `fake-token-${username}`;
    if (username === "admin@gmail.com") {
      //contra admin123
      setAdmin(true);
      console.log("Admin soy");
      localStorage.setItem("admin", true);
    }
    localStorage.setItem("authToken", token);
    setUser(username);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
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
