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

const shoppingCartSlice = createSlice({
  name: 'cart/products',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Products>) => {
      const existingProduct = state.products.find(
        (product) => product.productId === action.payload.productId
      );
      if (!existingProduct) {
        state.products.push(action.payload);
        state.shoppingCartCounter += 1;
      }
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      const productIndex = state.products.findIndex(
        (product) => product.productId === action.payload
      );
      if (productIndex !== -1) {
        state.products.splice(productIndex, 1);
        state.shoppingCartCounter -= 1;
      }
    },
  },
});

export const { addProductToCart, removeProductFromCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
