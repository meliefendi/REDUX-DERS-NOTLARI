
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//kayıtları getirme
export const getTodosAsync = createAsyncThunk("todos/getTodosAsync", async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`);
    return await res.data;
});
//kayıt ekleme 
export const addTodoAsync = createAsyncThunk("todos/addTodoAsync", async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`, data);
    return res.data;
});
//completed işlemi
export const toggleTodoAsync = createAsyncThunk("todos/toggleTodosAsync", async ({id, data}) => {
    const res = await axios.patch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`, data);
    return res.data;
});
//silme işlemi
export const removeTodoAsync = createAsyncThunk("todos/removeTodoAsync", async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`);
    return id;
})

export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        // localStorage.getItem("activeFilter") 
        activeFilter: "all",
        
        addNewTodo:{
            isLoading: false,
            error: null,
        }
    },
    //reducers içerisinde bulunan addTodo fonkiyonunun işini backend yaptığı için buradan kaldırdık.
    reducers: {
        // toggle: (state, action) => {
        //     const { id } = action.payload;
        //     const item = state.items.find((item) => item.id === id);
        //     item.completed = !item.completed;
        // },
        // destroy: (state, action) => {
        //     const id = action.payload;
        //     const filtered = state.items.filter((item) => item.id !== id)
        //     state.items = filtered;
        // },
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
            state.addNewTodo.isLoading = true;
        });
        builder.addCase(addTodoAsync.fulfilled, (state, action) => {
            state.items.push(action.payload);
            state.addNewTodo.isLoading = false;
        });
        builder.addCase(addTodoAsync.rejected, (state, action) => {
            state.addNewTodo.isLoading = false;
            state.addNewTodo.error = action.error.message;
        });
        //completed todo
        builder.addCase(toggleTodoAsync.fulfilled, (state, action) => {
            const { id, completed } = action.payload;
            const index = state.items.findIndex((item) => item.id === id);
            state.items[index].completed = completed;
        });
        //silme işlemi
        builder.addCase(removeTodoAsync.fulfilled, (state, action) => {
            const id = action.payload;
            const index = state.items.findIndex((item) => item.id === id);
            state.items.splice(index, 1);
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

export const { changeActiveFilter, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer;
