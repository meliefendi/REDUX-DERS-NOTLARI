
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
    reducers: {
        addTodo: (state, action) => {
            state.items.push(action.payload)
        },
        toggle: (state, action) => {
            const { id } = action.payload;
            const item = state.items.find((item) => item.id === id);
            item.completed = !item.completed;
        },
        // BURDA FİLTRELEME İŞLEMİ YAPTIK. EŞLEŞMEYENLER GÖSTERİLİR. EŞLEŞEN DİZİDEN ÇIKARILIR. 
        destroy: (state, action) => {
            const id = action.payload;
            const filtered = state.items.filter((item) => item.id !== id)
            state.items = filtered;
        }
    },
})

export const { addTodo, toggle, destroy } = todosSlice.actions;
export default todosSlice.reducer;