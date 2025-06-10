/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
// Crear un contexto para el carrito
const CartContext = createContext();
// Proveedor del contexto
export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    
    const agregarAlCarrito = (producto) => {
        setCartItems(() => [...cartItems, producto]);
    };

    const eliminarDelCarrito = (id) => {
        setCartItems(() => cartItems.filter((item) => item.id !== id));
    };
    
    const limpiarCarrito = () => {
        setCartItems([]);
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

