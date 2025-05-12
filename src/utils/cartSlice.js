import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      console.log("inside redux", newItem);
      let existingitem = state.items.find((i) => i.id === newItem.id);
      if (existingitem) {
        if (!newItem.quantity) {
          existingitem = {
            ...existingitem,
            quantity: action.payload.minimumOrderQuantity,
          };
        }
        existingitem.quantity = action.payload.quantity;
      } else {
        if (!newItem.quantity) {
          state.items.unshift({
            ...action.payload,
            quantity: newItem.minimumOrderQuantity,
            Newprice: (newItem.price * newItem.minimumOrderQuantity).toFixed(2),
          });
        } else {
          state.items.unshift({ ...action.payload });
        }
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
        item.Newprice = (item.quantity * item.price).toFixed(2);
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          item.Newprice = (item.quantity * item.price).toFixed(2);
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
