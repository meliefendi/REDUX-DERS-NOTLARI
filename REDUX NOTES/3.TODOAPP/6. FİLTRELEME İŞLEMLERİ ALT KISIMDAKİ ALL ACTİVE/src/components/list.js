
import React from "react";
//useSelector state verilerini aktarma hooku
import { useSelector, useDispatch } from "react-redux";
//chaked olayı için tanımlanan state
import { toggle, destroy } from "../redux/todos/todosSlice";

let filtered = [];

function List() {
    const items = useSelector(state => state.todos.items);
    //filtreleme işlemi 
    const activeFilter = useSelector(state => state.todos.activeFilter)

    const dispatch = useDispatch();

    //silme işlemi
    const handleDestroy = (id) => {
        if (window.confirm("Emin misin?")) {
            dispatch(destroy(id))
        }
    }
    //filtreleme işlemi
    filtered = items;
    if(activeFilter !== "all") {
        filtered = items.filter((todo) => activeFilter === "active" 
        ? todo.completed === false   
        : todo.completed === true   )
    }

    return (
        <ul className="todo-list">

            {
                filtered.map((item) => (
                    <li key={item.id} className={item.completed ? "completed" : ""} >
                        <div className="view">
                            <input
                                className="toggle"
                                type="checkbox"
                                onChange={() => dispatch(toggle({ id: item.id }))}
                                checked={item.completed}
                            />
                            <label>{item.title}</label>

                            <button
                                className="destroy"

                                //  onClick={() => dispatch(destroy(item.id))} alert kutusu gösterdiğimiz için bunu yukarı taşıdık.
                                onClick={() => handleDestroy(item.id)}
                            ></button>
                            
                        </div>
                    </li>
                ))
            }

        </ul>
    )
}

export default List;