
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllQuotes = createAsyncThunk("quotes/fetchAll", async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/quotes`);
    const data = res.data.slice(0, 12);
    return data;
})
export const quotesSlice = createSlice({
    name: "quotes",
    initialState: {
        items: [],
        status: "idle",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllQuotes.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = "succeeded";
        });
        builder.addCase(fetchAllQuotes.pending, (state, action) => {
            state.status = "loading";
        });
        builder.addCase(fetchAllQuotes.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    },
});

export const quotesSelector = (state) => state.quotes.items;
export const statusSelector = (state) => state.quotes.status;
export const errorSelector = (state) => state.quotes.error;
export default quotesSlice.reducer;