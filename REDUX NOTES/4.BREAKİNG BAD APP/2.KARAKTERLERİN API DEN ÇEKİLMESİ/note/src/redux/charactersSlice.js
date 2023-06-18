
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk(
    "characters/getCharacters",
    async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_ENDPOINT}/characters`
      );
      const data = response.data.slice(0, 10); // Sadece ilk 10 veriyi al
  
      return data;
    }
  );
  
export const charactersSlice = createSlice({
    name: "characters",
    initialState: {
        items: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
            console.log(action.payload)
        })
    }
});

export default charactersSlice.reducer;