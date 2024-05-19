import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Products } from '@/interfaces/products';

interface ShoppingCartState {
  products: Products[];
  shoppingCartCounter: number;
}

const initialState: ShoppingCartState = {
  products: [],
  shoppingCartCounter: 0,
};

export const ShoppingCartSlice = createSlice({
  name: 'cartProducts',
  initialState,
  reducers: {
    addProductsFromCart: (state, action: PayloadAction<Products>) => {
      const existingProduct = state.products.find(
        (product) => product.productId === action.payload.productId
      );
      if (!existingProduct) {
        state.products.push(action.payload);
        state.shoppingCartCounter++;
      }
    },
    deleteProductsFromCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.productId !== action.payload
      );
      state.shoppingCartCounter = Math.max(0, state.shoppingCartCounter - 1);
    },
  },
});

export default ShoppingCartSlice;

export const { addProductsFromCart, deleteProductsFromCart } =
  ShoppingCartSlice.actions;
