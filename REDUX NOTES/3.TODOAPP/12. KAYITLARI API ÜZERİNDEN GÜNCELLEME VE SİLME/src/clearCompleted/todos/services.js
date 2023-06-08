
import { createAsyncThunk } from "@reduxjs/toolkit";
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
});

//tamamlananları silme işlemi
export const completedClear = createAsyncThunk("todos/completedClear", async (data)=> {
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`, data);
    return res.data;
})