
import React from "react";
//useSelector state verilerini aktarma hooku
import { useSelector, useDispatch } from "react-redux";
//chaked olayı için tanımlanan state
import { toggle } from "../redux/todos/todosSlice";

function List() {
    const items = useSelector(state => state.todos.items);

    const dispatch = useDispatch();

    return (
        <ul className="todo-list">

            {
                items.map((item) => (
                    <li key={item.id} className={item.completed ? "completed" : ""} >
                        <div className="view">
                            <input
                                className="toggle"
                                type="checkbox"
                                // BURDA DA İTEMS İÇERİSİNDE BULUNAN MADDENİN İD SİNİ ALIYORUZ VE PARAMETRE OLARAK YOLLUOYRUZ. CHECED OLAYININ TERSİNİ AYARLAMAK İÇİN AYARLI 
                                onChange={() => dispatch(toggle({ id: item.id }))}

                                checked={item.completed}
                            />
                            <label>{item.title}</label>
                            <button className="destroy"></button>
                        </div>
                    </li>
                ))
            }

        </ul>
    )
}

export default List;