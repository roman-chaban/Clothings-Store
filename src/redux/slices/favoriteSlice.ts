import { Products } from '@/interfaces/products';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface FavoritesProductsState {
  favorite: Products[];
  favoriteCounter: number;
}

const initialState: FavoritesProductsState = {
  favorite: [],
  favoriteCounter: 0,
};

export const favoriteSlice = createSlice({
  name: 'favorite/products',
  initialState,
  reducers: {
    addProductToFavorite: (state, action: PayloadAction<Products>) => {
      const existingProduct = state.favorite.find(
        (fav) => fav.productId === action.payload.productId
      );
      if (!existingProduct) {
        state.favorite.push(action.payload);
        state.favoriteCounter++;
      }
    },
    deleteProductFromFavorite: (state, action: PayloadAction<number>) => {
      state.favorite = state.favorite.filter(
        (fav) => fav.productId !== action.payload
      );
      state.favoriteCounter = Math.max(0, state.favoriteCounter - 1);
    },
    setSelectedProduct: (state, action: PayloadAction<Products[]>) => {
      state.favorite = action.payload;
    },
  },
});

export const {
  addProductToFavorite,
  deleteProductFromFavorite,
  setSelectedProduct,
} = favoriteSlice.actions;
