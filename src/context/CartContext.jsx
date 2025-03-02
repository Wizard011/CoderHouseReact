import { createContext, useState } from "react";

// Contexto del carrito
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Función para agregar un producto al carrito
    const addItem = (item) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(product => product.id === item.id);
            if (existingItem) {
                return prevCart.map(product =>
                    product.id === item.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    // Función para aumentar la cantidad de un producto
    const increaseQuantity = (id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Función para disminuir la cantidad de un producto
    const decreaseQuantity = (id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    // Función para eliminar un producto del carrito
    const removeItem = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    // Función para vaciar el carrito
    const clearCart = () => {
        setCart([]);
    };

    // Función para calcular el total del carrito
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, increaseQuantity, decreaseQuantity, calculateTotal }}>
            {children}
        </CartContext.Provider>
    );
};
