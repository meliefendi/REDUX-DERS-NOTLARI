
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodosAsync = createAsyncThunk("todos/getTodosAsync", async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`);
    return await res.data;
});

// export const getTodosAsync = createAsyncThunk("todos/getTodosAsync", async () => {
//     const res = await fetch("http://localhost:7000/todos");
//     return await res.json();
// });

export const addTodoAsync = createAsyncThunk("todos/addTodoAsync", async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`, data);
    return res.data;
})
export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        activeFilter: "all",
        addNewTodoIsLoading : false,
        addNewTodoError : null,
    },
    //reducers içerisinde bulunan addTodo fonkiyonunun işini backend yaptığı için buradan kaldırdık.
    reducers: {
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

        //add todos (post işlemi- yani backende veri gönderme işlemi)
        builder.addCase(addTodoAsync.pending, (state) => {
            state.addNewTodoIsLoading = true;
        });
        builder.addCase(addTodoAsync.fulfilled, (state, action) => {
            state.items.push(action.payload);
            state.addNewTodoIsLoading = false;
        });
        builder.addCase(addTodoAsync.rejected, (state, action) => {
            state.addNewTodoIsLoading = false;
            state.addNewTodoError = action.error.message;
        })

    }
})

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

export const { toggle, destroy, changeActiveFilter, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer;