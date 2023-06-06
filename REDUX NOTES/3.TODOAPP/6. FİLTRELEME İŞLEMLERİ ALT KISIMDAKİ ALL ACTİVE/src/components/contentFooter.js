
import React from "react";

//filtreleme işlemi 
import { changeActiveFilter, clearCompleted } from "../redux/todos/todosSlice";

//useSelector //useDispatch
import { useSelector, useDispatch } from "react-redux";


function ContentFooter() {
    //burda todos statindeki verilere ulaşmak için useSelector hookunu kullandık. todos içerisindeki items ögeleri.
    const items = useSelector(state => state.todos.items);
    // burda items ögeleri içerisindeki aktif olan maddeleri filterlerdik.
    const itemsLeft = items.filter((item) => !item.completed).length;

    //seçilen sınıfın all active, completed ayarlanma işlemi
    const activeFilter = useSelector(state => state.todos.activeFilter);

    //filtreleme işlemi güncelleme işlemi
    const dispatch = useDispatch();

    return (
        <footer className="footer">
            <span className="todo-count">

                {/* burdaki işlemde aktif olan maddelerin sayısı gösterdik */}
                <strong> {itemsLeft} </strong> {" "}
                item{itemsLeft > 1 && "s"} left
            </span>

            <ul className="filters">
                <li>
                    <a href="#/" 
                    className={activeFilter === "all" ? "selected" : ""}
                    onClick={() => dispatch(changeActiveFilter("all")) }
                    >All</a>
                </li>
                <li>
                    <a href="#/" 
                    className={activeFilter === "active" ? "selected" : ""}
                    onClick={() => dispatch(changeActiveFilter("active"))}
                    >Active</a>
                </li>
                <li>
                    <a href="#/" 
                    className={activeFilter === "completed" ? "selected" : ""}
                    onClick={() => dispatch(changeActiveFilter("completed"))}
                    >Completed</a>
                </li>
            </ul>

            <button className="clear-completed" onClick={() => dispatch(clearCompleted())} >
                Clear completed
            </button>
        </footer>
    )
}

export default ContentFooter;
