
import React from "react";

import { configureStore } from "@reduxjs/toolkit";

//state redux component
import todosSlice from "../todos/todosSlice";

export const store = configureStore({
    reducer:{
        todos: todosSlice
    },
})