/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
// Crear un contexto para el carrito
const CartContext = createContext();
// Proveedor del contexto
export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        const stored = localStorage.getItem("cartItems");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const agregarAlCarrito = (producto) => {
        setCartItems(() => [...cartItems, producto]);
        toast.success("Producto agregado al carrito!");
    };

    const eliminarDelCarrito = (id) => {
        setCartItems(() => cartItems.filter((item) => item.id !== id));
        toast.error("Producto eliminado del carrito!");
    };

    const limpiarCarrito = () => {
        setCartItems([]);
        toast.info("Carrito limpiado!");
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                agregarAlCarrito,
                eliminarDelCarrito,
                limpiarCarrito,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext);

