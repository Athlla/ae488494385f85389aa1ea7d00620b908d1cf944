import { IProduct } from 'interfaces/IProduct';
import { ReactNode, useState } from 'react';
import { createContext } from 'react';

type initialValueType = {
  cart: IProduct[];
  add2Cart: (item: IProduct) => void;
};

const initialValue: initialValueType = {
  cart: [],
  add2Cart: () => {},
};

export const CartContext = createContext(initialValue);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  const add2Cart = (item: IProduct) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const value = {
    cart,
    add2Cart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
