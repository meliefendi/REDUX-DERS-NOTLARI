
// import { configureStore } from "@reduxjs/toolkit";
// import { userSlice } from "./userSlice";

// export const store = configureStore({
//     reducer:{
//         theme: userSlice,
//     }
// })
import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./themeSlice"

export const store = configureStore({
  reducer: {
    user: userSlice,
    devTools: true,
  }
  
});

