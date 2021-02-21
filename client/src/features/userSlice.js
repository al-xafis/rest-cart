import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

// export const loadUser = async => {
//   if (localStorage.token) {
//     setAuthToken(localStorage.token);
//   }

//   try {
//     const res = await axios.get('http://localhost:5000/user');

    
//   }
// }

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: null
  },
  reducers: {
    register(state, action) {
      if (action.payload.token) {
        localStorage.setItem('token', action.payload.token);
      } else {
        localStorage.removeItem('token');
      }
      state.user += action.payload.user;
      state.token += action.payload.token;
    },
    login(state, action) {
      if (action.payload.token) {
        localStorage.setItem('token', action.payload.token);
      } else {
        localStorage.removeItem('token');
      }
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout(state) {
      localStorage.removeItem('token');
      state.user = null;
      state.token = null;
    },
    loadUser(state, action) {
      state.user = action.payload
    }
    
  }
});

export const { register, login, logout, loadUser } = userSlice.actions;


export default userSlice.reducer;