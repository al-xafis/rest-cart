import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
    clearProducts(state) {
      state.splice(0);
    }
  }
});

export const { addProduct, clearProducts } = productsSlice.actions;

export default productsSlice.reducer;