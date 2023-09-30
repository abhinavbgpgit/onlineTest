// features/auth/authSlice.js
import { createSlice} from '@reduxjs/toolkit';

const initialState = {
  registerModalShow: false,
 }

const registrationModalSlice = createSlice({
  name: 'registerModal',
  initialState,
  reducers: {
    registerShowModal: (state) => {
        state.registerModalShow = true;
    },
    registerHideModal: (state) => {
        state.registerModalShow = false;
    },
  },
 
})
export const {registerShowModal,registerHideModal}=registrationModalSlice.actions ;
export default registrationModalSlice.reducer;