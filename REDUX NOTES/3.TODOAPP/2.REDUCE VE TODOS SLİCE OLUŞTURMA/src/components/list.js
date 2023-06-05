
import React from "react";
//useSelector state verilerini aktarma hooku
import { useSelector } from "react-redux";

function List() {
    const items = useSelector(state => state.todos.items);

    return (
        <ul className="todo-list">
            {/* <li className="completed">
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>Learn JavaScript</label>
                    <button className="destroy"></button>
                </div>
            </li> */}

            {
                items.map((item) => (
                    <li key={item.id} className={item.completed ? "completed" : "" } >
                        <div className="view">
                            <input className="toggle" type="checkbox" />
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