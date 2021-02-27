import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: []
  },
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    removeProduct(state, action) {
     state.products = state.products.filter(product => product.id !== action.payload);
    },
    clearProducts(state) {
      state.products.splice(0);
    }
  }
});

export const { addProduct, clearProducts, removeProduct } = productsSlice.actions;

export default productsSlice.reducer;