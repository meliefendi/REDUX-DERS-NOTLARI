import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    them: 'red',
    user: null,
    loggedIn: false, 
  },
  reducers: {
    setTheme: (state, action) => {
      state.them = action.payload;
    },
    login: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.loggedIn = false;
    }
  },
});
//useSelector
export const selectUser = (state) => state.user.user;
//dispatch
export const { setTheme, login, logout } = userSlice.actions;
export default userSlice.reducer;
