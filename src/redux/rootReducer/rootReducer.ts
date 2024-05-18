import { combineReducers } from 'redux';
import productsSlice from '../slices/productsSlice';
import { store } from '../store/store';
import { favoriteSlice } from '../slices/favoriteSlice';

const rootReducer = combineReducers({
  productsSlice: productsSlice,
  favorite: favoriteSlice.reducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof store.getState>;
