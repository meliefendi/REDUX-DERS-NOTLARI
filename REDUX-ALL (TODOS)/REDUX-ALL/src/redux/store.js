

import { configureStore } from "@reduxjs/toolkit";

//state redux component
import todosSlice from "./todos/todosSlice";

export const store = configureStore({
    reducer:{
        todos: todosSlice
    },
});

// import { configureStore } from "@reduxjs/toolkit";
// import { todosSlice } from "./todosSlice";

// const store = configureStore({
//   reducer: todosSlice.reducer,
// });

// // Load state from localStorage if it exists
// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem("todosState");
//     if (serializedState === null) {
//       return undefined;
//     }
//     return JSON.parse(serializedState);
//   } catch (err) {
//     return undefined;
//   }
// };

// // Save state to localStorage
// const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem("todosState", serializedState);
//   } catch {
//     // Ignore write errors
//   }
// };

// // Subscribe to state changes and save to localStorage
// store.subscribe(() => {
//   saveState(store.getState());
// });

// export default store;
