

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/slice";

function Input() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div>
      <h1>TodoList</h1>
      <form onSubmit={handleSubmit}>
        <label>Veri girin</label> <br />
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Input;
