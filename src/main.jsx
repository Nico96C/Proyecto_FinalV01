import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { ProductsProvider } from "./contexts/ProductsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <AuthProvider>
        <CartProvider>
          <ProductsProvider>
            <App />
          </ProductsProvider>
        </CartProvider>
      </AuthProvider>
  </StrictMode>
);
