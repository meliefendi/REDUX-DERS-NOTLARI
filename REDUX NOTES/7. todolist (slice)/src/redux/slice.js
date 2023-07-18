import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: localStorage.getItem("todo") //local storage'da kayıt yapılmışsa onu yükle yoksa varsayılanı yükle dedik.
    ? JSON.parse(localStorage.getItem("todo"))
    : [],
  },
  reducers: {
    addTodo: (state, action) => {
    state.items = [...state.items, action.payload];
      //state.items.push(action.payload); //aynı işleve sahip sanırım konsola yazdırdıüımda gördüğüm kadarıyla. 
      //!! Bu nedenle, spread operatörünü kullanarak yeni bir dizi oluşturmak, state'in değişmezliğini korur
      localStorage.setItem("todo", JSON.stringify(state.items));
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
