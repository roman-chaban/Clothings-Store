import { combineReducers } from 'redux';
import productsSlice from '../slices/productsSlice';
import { store } from '../store/store';
import { favoriteSlice } from '../slices/favoriteSlice';
import ShoppingCartSlice from '../slices/shoppingCartSlice';

const rootReducer = combineReducers({
  productsSlice: productsSlice.reducer,
  favorite: favoriteSlice.reducer,
  shoppingCart: ShoppingCartSlice.reducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof store.getState>;
