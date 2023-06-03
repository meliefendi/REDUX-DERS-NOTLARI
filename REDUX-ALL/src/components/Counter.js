
import {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { increament, decreament, increamentByAmount } from "../redux/counter/counterSlice";

function Counter(){
   
    const [ amount, setAmount ] = useState(3)
    const dispatch = useDispatch();

    const countValue = useSelector((state) => state.counter.value)
    return(
        <div className="App-header">
           <h1> {countValue} </h1>

           <button onClick={() => dispatch(decreament())} >Decreament</button>
           <button onClick={() => dispatch(increament())} >Increament</button>
       <br/>
       <br/>

       <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
       <button onClick={() => dispatch(increamentByAmount(amount))} >Increament by Amount</button>
      
       
        </div>
    )
}
export default Counter;