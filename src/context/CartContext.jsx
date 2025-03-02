import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    console.log(cart);
    

    const addItem = (item) => {
        setCart(prevCart => {
            // Verifica si el producto ya existe en el carrito
            const existingItem = prevCart.find(product => product.id === item.id);
            if (existingItem) {
                // Si ya existe, solo incrementa la cantidad
                return prevCart.map(product =>
                    product.id === item.id
                        ? { ...product, quantity: product.quantity + 1 } // Incrementa la cantidad
                        : product
                );
            } else {
                // Si no existe, agrega el producto con cantidad 1
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };
    
    const increaseQuantity = (id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };
    
    const decreaseQuantity = (id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };
    
    

    const removeItem = (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
    };

    const clearCart = () => {
        setCart([]);
    };
    

    return (
        <CartContext.Provider value={{ cart, setCart, addItem, removeItem, clearCart, increaseQuantity, decreaseQuantity }}>
            {children}  
        </CartContext.Provider>
    );
}
