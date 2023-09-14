// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  user: {}, // for user object
  // userToken: null, // for storing the JWT
  // error: null,
  // success: false,
  isAuthenticated: false, // for monitoring the registration process.
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: {},
})
export const {login,logout}=authSlice.actions ;
export default authSlice.reducer;