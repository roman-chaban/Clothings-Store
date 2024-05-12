import { Products } from '@/interfaces/products';
import { createSlice } from '@reduxjs/toolkit';

export interface ProductsState {
  products: Products[];
  favoriteCounter: number;
  basketCounter: number;
}

const initialState: ProductsState = {
  products: [],
  favoriteCounter: 0,
  basketCounter: 0,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
