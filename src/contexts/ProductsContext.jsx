import { createContext, useState, useEffect, useContext } from "react";

const ProductsContext = createContext(undefined);

// Componente Provider que manejará la carga de datos
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingPercent, setLoadingPercent] = useState(0);

  useEffect(() => {
    setLoading(true);
    setLoadingPercent(0);

    // Lógica del porcentaje de carga (visual, no ligada al fetch real)
    const percentInterval = setInterval(() => {
      setLoadingPercent((prev) => {
        if (prev < 100) return prev + 1;
        return 100;
      });
    }, 25);

    // Timer para simular un tiempo mínimo de carga
    const timer = setTimeout(() => {
        setLoading(false);
        clearTimeout(timer);
        clearInterval(percentInterval);
    }, 2500);

    // Llamada a la API
    fetch("https://682219c0b342dce8004d1dd0.mockapi.io/SevApi/productos")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error de API al cargar productos:", error);
        setProducts([]);
      });

    // Cleanup function
    return () => {
      clearTimeout(timer);
      clearInterval(percentInterval);
    };
  }, []);

  const contextValue = {
    products,
    loading,
    loadingPercent,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

// Hook personalizado para consumir el contexto fácilmente
export const useProducts = () => {
  const context = useContext(ProductsContext);

  // Verificamos si el hook se usa dentro del Provider
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }

  return context;
};
