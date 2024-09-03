// profileSlice.js
import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    isEditable: false,
    userData: {}, // لإدارة بيانات المستخدم
  },
  reducers: {
    toggleEditable: (state) => {
      state.isEditable = !state.isEditable;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { toggleEditable, setUserData } = profileSlice.actions;
export default profileSlice.reducer;
