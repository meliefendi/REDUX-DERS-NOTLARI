
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
        ],
        //filtreleme işlemi dersi. varsayılan olarak all gönderdik. all seçili
        activeFilter: "all",
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
        destroy: (state, action) => {
            const id = action.payload;
            const filtered = state.items.filter((item) => item.id !== id)
            state.items = filtered;
        },
        // filtreleme işlemi
        changeActiveFilter: (state, action) => {
            state.activeFilter = action.payload;
        },
        //tamamlananları silme 
        clearCompleted : (state) => {
            const filtered = state.items.filter((item) => item.completed === false)
        state.items = filtered;
        }
    },
})

export const { addTodo, toggle, destroy, changeActiveFilter, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer;
