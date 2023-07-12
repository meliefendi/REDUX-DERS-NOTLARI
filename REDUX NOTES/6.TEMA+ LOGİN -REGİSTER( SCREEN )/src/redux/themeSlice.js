import { createSlice } from '@reduxjs/toolkit';

const themSlice = createSlice({
  name: 'user',
  initialState: {
    them: 'red',
    user: null,
  },
  reducers: {
    setTheme: (state, action) => {
      state.them = action.payload;
    },
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  },
});
//useSelector
export const selectUser = (state) => state.user.user;
//dispatch
export const { setTheme, login, logout } = themSlice.actions;
export default themSlice.reducer;
