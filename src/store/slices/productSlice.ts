import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "@/interfaces/products";

interface ProductsState {
  items: Products[];
  filteredItems: Products[];
}

const initialState: ProductsState = {
  items: [],
  filteredItems: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Products[]>) {
      state.items = action.payload;
      state.filteredItems = action.payload; 
    },
    filterProducts(state, action: PayloadAction<string>) {
      const query = action.payload.toLowerCase();
      if (Array.isArray(state.items)) {
        state.filteredItems = state.items.filter((product) =>
          product.title.toLowerCase().includes(query)
        );
      } else {
        console.error("State items is not an array.");
        state.filteredItems = []; 
      }
    },
  },
});

export const { setProducts, filterProducts } = productsSlice.actions;
export default productsSlice.reducer;
