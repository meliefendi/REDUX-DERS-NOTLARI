
import React from "react";

import { useDispatch, useSelector } from "react-redux";
//chaked olayı için tanımlanan state
import { toggle, destroy, selectFilteredTodos } from "../redux/todos/todosSlice";

let filtered = [];

function List() {
    const filteredTodos = useSelector(selectFilteredTodos)
    const dispatch = useDispatch();

    //silme işlemi
    const handleDestroy = (id) => {
        if (window.confirm("Emin misin?")) {
            dispatch(destroy(id))
        }
    }

    return (
        <ul className="todo-list">

            {
                filteredTodos.map((item) => (
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