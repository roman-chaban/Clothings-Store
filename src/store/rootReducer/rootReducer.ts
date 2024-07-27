import { combineReducers } from "redux";
import productsSlice from "../slices/productsSlice";
import { store } from "../store/store";
import favoriteSlice from "../slices/favoriteSlice";
import shoppingCartSlice from "../slices/shoppingCartSlice";
import searchSlice from "../slices/searchSlice";
import productSlice from "../slices/productSlice";

const rootReducer = combineReducers({
  productsSlice: productsSlice,
  favorite: favoriteSlice,
  shoppingCart: shoppingCartSlice,
  search: searchSlice,
  product: productSlice,
});

export default rootReducer;
export type RootState = ReturnType<typeof store.getState>;
