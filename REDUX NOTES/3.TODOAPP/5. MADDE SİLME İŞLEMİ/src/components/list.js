
import React from "react";
//useSelector state verilerini aktarma hooku
import { useSelector, useDispatch } from "react-redux";
//chaked olayı için tanımlanan state
import { toggle, destroy } from "../redux/todos/todosSlice";

function List() {
    const items = useSelector(state => state.todos.items);

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
                items.map((item) => (
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