import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/user/authSlice';
import registerReducer from '../features/user/openRegisterModalSlice';
import loginReducer from '../features/user/openLoginModalSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    registerModal : registerReducer,
    loginModal: loginReducer,
  }
})
export default store