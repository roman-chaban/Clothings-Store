import { combineReducers } from 'redux';
import productsSlice from '../slices/productsSlice';
import { store } from '../store/store';

const rootReducer = combineReducers({
  productsSlice: productsSlice,
});

export default rootReducer;
export type RootState = ReturnType<typeof store.getState>;
