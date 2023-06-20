
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk("characters/getCharacters", async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters`);
  const data = response.data.slice(0, 12); // Sadece ilk 10 veriyi al

  return data;
}
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
    isLoading: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    })

  }
});

export default charactersSlice.reducer;