import { combineReducers } from 'redux';
import productsSlice from '../slices/productsSlice';
import { store } from '../store/store';
import { favoriteSlice } from '../slices/favoriteSlice';
import shoppingCartSlice from '../slices/shoppingCartSlice';

const rootReducer = combineReducers({
  productsSlice: productsSlice.reducer,
  favorite: favoriteSlice.reducer,
  shoppingCart: shoppingCartSlice,
});

export default rootReducer;
export type RootState = ReturnType<typeof store.getState>;
