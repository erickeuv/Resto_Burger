import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item) => {
        setCartItems((prevItems) => {
            // Verifica si el artículo ya existe en el carrito
            const existingItem = prevItems.find((cartItem) => cartItem.title === item.title);
            
            if (existingItem) {
                // Si existe, incrementa la cantidad
                return prevItems.map((cartItem) =>
                    cartItem.title === item.title
                        ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
                        : cartItem
                );
            } else {
                // Si no existe, añade el nuevo artículo con cantidad 1
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    const removeItem = (itemToRemove) => {
        setCartItems((prevItems) => {
            // Elimina el artículo del carrito
            return prevItems.filter((item) => item.title !== itemToRemove.title);
        });
    };

    const decrementItem = (itemToDecrement) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.title === itemToDecrement.title);
            
            if (existingItem && existingItem.quantity > 1) {
                // Si el artículo tiene más de 1, disminuye la cantidad
                return prevItems.map((item) =>
                    item.title === itemToDecrement.title
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            } else {
                // Si es 1 o no existe, elimina el artículo
                return prevItems.filter((item) => item.title !== itemToDecrement.title);
            }
        });
    };

    const incrementItem = (itemToIncrement) => {
        setCartItems((prevItems) => {
            return prevItems.map((item) =>
                item.title === itemToIncrement.title
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        });
    };

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addItem, removeItem, getTotal, decrementItem, incrementItem }}>
            {children}
        </CartContext.Provider>
    );
};
