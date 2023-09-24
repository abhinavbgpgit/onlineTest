// features/auth/authSlice.js
import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  user: {}, // for user object
  // userToken: null, // for storing the JWT
  // error: null,
  // success: false,
  isAuthenticated: false, // for monitoring the registration process.
}

export const fetchContent = createAsyncThunk(
  'content/fetchContent',
  async () => {
    const res = await axios('http://localhost:8000/registeredUsers')
    const data = await res.data
    return data
  }
)

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