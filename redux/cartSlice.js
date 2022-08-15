import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  total: 0,
  quantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity++;
      state.total += action.payload.price * action.payload.quantity;
    },
    reset: (state) => {
      state = initialState;
    },
  },
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
