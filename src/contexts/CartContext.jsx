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

    const agregarAlCarrito = (producto, cantidad = 1) => {
        setCartItems((prevCartItems) => {
            const existe = prevCartItems.find((item) => item.id === producto.id);
            if (existe) {
                return prevCartItems.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: Math.min(item.cantidad + cantidad, 9) }
                        : item
                );
            } else {
                return [...prevCartItems, { ...producto, cantidad: Math.min(cantidad, 9) }];
            }
        });
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

