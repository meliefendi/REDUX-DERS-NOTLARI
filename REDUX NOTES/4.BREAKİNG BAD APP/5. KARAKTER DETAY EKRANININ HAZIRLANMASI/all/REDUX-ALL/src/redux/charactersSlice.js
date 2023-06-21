
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchCharacters = createAsyncThunk("characters/getCharacters", async () => {
//   const response = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters`);
//   const data = response.data.slice(0, 12); // Sadece ilk 10 veriyi al

//   return data;
// }
// );
const char_limit = 12;

export const fetchCharacters = createAsyncThunk("characters/getCharacters", async (page) => {
  const response = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?_page=${page}&_limit=${char_limit}`);
  const data = response.data.slice(0, 12); // Sadece ilk 12 veriyi al

  return data;
}
);


export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
    status: "idle",
    page: 0,
    hasNextPage: true,
    item: {},


  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.items = [...state.items, ...action.payload];
      state.status = "success";
      state.page += 1;
      if (action.payload.length < 12) {
        state.hasNextPage = false;
      }
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;

    })

  }
});

export default charactersSlice.reducer;