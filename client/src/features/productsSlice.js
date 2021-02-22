import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    }
  }
});

export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;