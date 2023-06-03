
import React from "react";
import { useSelector } from "react-redux";

function Counter(){
    //counValue aslında store sayfasındaki reducer içerisindeki counter: counterReducetur o da counterSlice sayfasındaki counterSlice fonksiyonunun bize sunduğu değerlerdir.
    // VE DURUMU EKRANA YAZDIRMAMIZI SAĞLAYAN ARAÇ USESELECTOR
    const countValue = useSelector((state) => state.counter.value)
    return(
        <div>
           <h1> {countValue} </h1>
        </div>
    )
}
export default Counter;
