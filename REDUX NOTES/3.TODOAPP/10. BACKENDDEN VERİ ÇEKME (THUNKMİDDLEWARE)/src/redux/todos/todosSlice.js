
import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodosAsync = createAsyncThunk("todos/getTodosAsync", async () => {
    const res = await axios("http://localhost:7000/todos");
    return await res.data;
});

// export const getTodosAsync = createAsyncThunk("todos/getTodosAsync", async () => {
//     const res = await fetch("http://localhost:7000/todos");
//     return await res.json();
// });

export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        activeFilter: "all",
    },
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.items.push(action.payload)
            },
            prepare: ({title}) => {
                return{
                    payload: {
                        id: nanoid(),
                        completed: false,
                        title,
                    }
                }
            }
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
        clearCompleted: (state) => {
            const filtered = state.items.filter((item) => item.completed === false)
            state.items = filtered;
        }
    },
    extraReducers: (builder) => {
        // get todos
        builder.addCase(getTodosAsync.pending, (state) => {
          state.isLoading = true;
        });
        builder.addCase(getTodosAsync.fulfilled, (state, action) => {
          state.items = action.payload;
          state.isLoading = false;
        });
        builder.addCase(getTodosAsync.rejected, (state, action) => {
          state.error = action.error.message;
          state.isLoading = false;
        });
    
}})

//useSelector
export const selectTodos = (state) => state.todos.items;
//filter
export const selectFilteredTodos = (state) => {
    if (state.todos.activeFilter === "all") {
        return state.todos.items;
    }
    return state.todos.items.filter((todo) =>
        state.todos.activeFilter === "active" ? todo.completed === false : todo.completed === true)
}
//activeFilter
export const selectActiveFilter = (state) => state.todos.items;

export const { addTodo, toggle, destroy, changeActiveFilter, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer;