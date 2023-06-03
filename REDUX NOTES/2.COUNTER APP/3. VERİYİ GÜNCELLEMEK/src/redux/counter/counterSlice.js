
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    //statedeki setstate kısmı burası. manipule etme kısmı. güncelleme kısmı 
    reducers: {
        increament: (state) => {
            state.value += 1
        },
        decreament: (state) => {
            state.value -= 1
        },
        //BURADAKİ ACTİON SANIRIM increamentByAmount TANIMLANAN YERDEKİ ONCLİK METODU NEYİ ETKİLİYOSA ONLAR. EN AZINDAN KONSOL LOG YAPINCA ONLAR ÇIKIYO. PAYLOAD İSE
        // increamentByAmount TANIMLANAN YERDEKİ VERİLEN PARAMETRE burada 3 tanımlamıştık. sayıları 3 er 3 er arttırdı. += olduğu için ayrıca
        increamentByAmount: (state, action) => {
            state.value += Number(action.payload);
        }
    },
});
//yazılan stateler daha sonra ekport edilir ve kullanıcak yerde import edilir.
export const { increament, decreament, increamentByAmount } = counterSlice.actions;
// kullanılacağı zaman ilgili fonkisyon adı ve reducerı da export edilir.
export default counterSlice.reducer;