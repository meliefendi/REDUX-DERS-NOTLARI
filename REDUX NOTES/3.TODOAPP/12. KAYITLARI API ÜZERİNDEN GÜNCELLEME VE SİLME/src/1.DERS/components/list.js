
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectFilteredTodos, getTodosAsync, toggleTodoAsync, removeTodoAsync } from "../redux/todos/todosSlice";

import Loading from "./loading";
import Error from "./error";

function List() {
    const filteredTodos = useSelector(selectFilteredTodos)
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.todos.isLoading);
    const error = useSelector(state => state.todos.error);

    //database veri getirme
    useEffect(() => {
        dispatch(getTodosAsync())
    }, [dispatch]);

    //silme işlemi
    const handleDestroy = async (id) => {
        if (window.confirm("Emin misin?")) {
           await dispatch(removeTodoAsync(id))
        }
    };

    //checked işlemi
    const handleToggle = async (id, completed) => {
        await dispatch(toggleTodoAsync({id, data:{completed}}));
    }

    if (isLoading) {
        return <Loading />
    };

    if (error) {
        return <Error message={error} />
    };


    return (
        <ul className="todo-list">

            {
                filteredTodos.map((item) => (
                    <li key={item.id} className={item.completed ? "completed" : ""} >
                        <div className="view">
                            <input
                                className="toggle"
                                type="checkbox"
                                onChange={() => handleToggle( item.id, !item.completed)}
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