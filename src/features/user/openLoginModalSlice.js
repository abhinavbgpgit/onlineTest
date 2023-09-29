// features/auth/authSlice.js
import { createSlice} from '@reduxjs/toolkit';

const initialState = {
  loginModalShow: false,
 }

const LoginModalSlice = createSlice({
  name: 'loginModal',
  initialState,
  reducers: {
    loginShowModal: (state) => {
        state.loginModalShow = true;
    },
    loginHideModal: (state) => {
        state.loginModalShow = false;
    },
  },
 
})
export const {loginShowModal,loginHideModal}=LoginModalSlice.actions ;
export default LoginModalSlice.reducer;