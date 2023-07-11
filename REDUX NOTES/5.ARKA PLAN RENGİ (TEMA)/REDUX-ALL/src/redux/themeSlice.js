import { createSlice } from '@reduxjs/toolkit';

const themSlice = createSlice({
  name: 'user',
  initialState: { them: 'red' },
  reducers: {
    setTheme: (state, action) => {
      state.them = action.payload;
    },
  },
});

export const { setTheme } = themSlice.actions;
export default themSlice.reducer;
