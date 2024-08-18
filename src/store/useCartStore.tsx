import { create } from 'zustand';
import { CartProduct, Product } from 'src/types/product';

interface CartState {
  products: CartProduct[];
  addProduct: (item: Product) => void;
  removeProduct: (id: number) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
  clearCart: () => void; 
}

const useCartStore = create<CartState>((set) => ({
  products: [],

  // Adiciona um produto ao carrinho
  addProduct: (item: Product) =>
    set((state) => {
      const existingProduct = state.products.find((product) => product.id === item.id);
      
      if (existingProduct) {
        // Se o produto já existe, incrementa a quantidade
        return {
          products: state.products.map((product) =>
            product.id === item.id
              ? { ...product, quantity: product.quantity + 1, totalPrice: (product.quantity + 1) * product.price }
              : product
          ),
        };
      } else {
        // Se o produto não existe, adiciona ao carrinho
        const newProduct: CartProduct = {
          ...item,
          quantity: 1,
          totalPrice: item.price,
        };
        return { products: [...state.products, newProduct] };
      }
    }),

  // Remove um produto do carrinho
  removeProduct: (id: number) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),

  // Incrementa a quantidade de um produto
  incrementQuantity: (id: number) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1, totalPrice: (product.quantity + 1) * product.price }
          : product
      ),
    })),

  // Decrementa a quantidade de um produto
  decrementQuantity: (id: number) =>
    set((state) => ({
      products: state.products
        .map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1, totalPrice: (product.quantity - 1) * product.price }
            : product
        )
        .filter((product) => product.quantity > 0), // Remove o produto se a quantidade for 0
    })),

  clearCart: () =>
    set(() => ({
      products: [],
    })),
}));

export default useCartStore;
