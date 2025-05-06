import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingitem = state.items.find((i) => i.id === newItem.id);
      if (existingitem) {
        existingitem.quantity += 1;
      } else {
        state.items.unshift({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((ele) => ele.id !== action.payload);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        }
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
