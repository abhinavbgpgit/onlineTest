import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/user/authSlice';
import registerReducer from '../features/user/openRegisterModalSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    registerModal : registerReducer
  }
})
export default store