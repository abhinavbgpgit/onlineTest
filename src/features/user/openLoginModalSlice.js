// features/auth/authSlice.js
import { createSlice} from '@reduxjs/toolkit';

const initialState = {
  loginModalShow: false,
 }

const loginModalSlice = createSlice({
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
export const {loginShowModal,loginHideModal}=loginModalSlice.actions ;
export default loginModalSlice.reducer;