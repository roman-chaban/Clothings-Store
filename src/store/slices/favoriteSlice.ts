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

 const favoriteSlice = createSlice({
  name: 'favorite/products',
  initialState,
  reducers: {
    addProductToFavorite: (state, action: PayloadAction<Products>) => {
      const existingProduct = state.favorite.find(
        (fav) => fav.productId === action.payload.productId
      );
      if (!existingProduct) {
        state.favorite.push(action.payload);
        state.favoriteCounter += 1;
      }
    },
    deleteProductFromFavorite: (state, action: PayloadAction<number>) => {
      const productIndex = state.favorite.findIndex(
        (favorite) => favorite.productId === action.payload
      );
      if (productIndex !== -1) {
        state.favorite.splice(productIndex, 1);
        state.favoriteCounter -= 1;
      }
    },
    setSelectedProduct: (state, action: PayloadAction<Products[]>) => {
      state.favorite = action.payload;
      state.favoriteCounter = action.payload.length;
    },
  },
});

export const {
  addProductToFavorite,
  deleteProductFromFavorite,
  setSelectedProduct,
} = favoriteSlice.actions;


export default favoriteSlice.reducer;