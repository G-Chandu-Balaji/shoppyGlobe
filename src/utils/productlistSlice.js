import { createSlice } from "@reduxjs/toolkit";

const productListSlice = createSlice({
  name: "ProductList",
  initialState: {
    items: [],
  },
  reducers: {
    additems: (state, action) => {
      state.items = action.payload;
    },
    clearItems: (state) => {
      state.items.length = 0;
    },
  },
});

export const { additems, clearItems } = productListSlice.actions;

export default productListSlice.reducer;
