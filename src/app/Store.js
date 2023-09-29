import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/user/authSlice';
import loginReducer from '../features/user/openLoginModalSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    loginModal : loginReducer
  }
})
export default store