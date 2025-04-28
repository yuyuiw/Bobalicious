import { createContext, useContext, useEffect,useState } from 'react';
import { Boba } from './types/boba';

interface CartItem {
    boba: Boba;
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (boba: Boba, quantity: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null); 

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    // cart remains stored after refresh
    const [cart, setCart] = useState<CartItem[]>(() => {
        // On initial load, check localStorage
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    const addToCart = (boba: Boba, quantity: number) => {
        console.log("boba being added", boba.id, boba);
        console.log("how much?: ", quantity);

        // Add the boba order and quantity to the cart
        // or update the quantity if that order is already in the cart
        setCart((previousItems) => {
            const existingOrder = previousItems.find((order) => order.boba.id === boba.id);
            if (existingOrder) {
                return previousItems.map((order) =>
                    order.boba.id === boba.id ? { ...order, quantity: order.quantity + quantity } : order
                );
            }
            return [...previousItems, { boba, quantity }];
        });
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used in a CartProvider");
    }
    return context;
};
