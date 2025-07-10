import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((item) => item.id === product.id);

      if (existing) {
        // update qty
        const updatedCart = state.cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
        return { cart: updatedCart };
      } else {
        // tambahkan produk baru
        return {
          cart: [...state.cart, { ...product, qty: 1 }],
        };
      }
    }),
  removeCart: (product) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== product.id),
    })),
  addQty: (product) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ),
    })),
  decQty: (product) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1} : item
      ),
    })),
}));

export default useCartStore;
