
import React from "react";

import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name:"todos",
    initialState:{
        items: [
            {
                id:"1",
                title:"Learn React-Redux",
                completed: true
            },
            {
                id:"2",
                title:"Read a Ders",
                completed: false
            },
        ]
    },
    reducers: {},
})

export default todosSlice.reducer;