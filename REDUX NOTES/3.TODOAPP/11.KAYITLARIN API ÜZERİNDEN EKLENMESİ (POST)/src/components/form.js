
import { useState } from "react";
//dispatch
import { useDispatch, useSelector } from "react-redux";
import { addTodoAsync } from "../redux/todos/todosSlice";
import Loading from "./loading";
import Error from "./error";

function Form() {
    const [title, setTitle] = useState("")

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.todos.addNewTodoIsLoading)
    const error = useSelector(state => state.todos.addNewTodoError)
   
    const handleSubmit = async (e) => {
        if (!title) return;
        e.preventDefault();

        await dispatch(addTodoAsync({ title }))
        setTitle("")
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center" }} >
                <input
                    //inputu veri girilirken işlemez hale getirdik.
                    disabled={isLoading}
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {
                    isLoading && <Loading />
                }
                {
                    error && <Error message={error} />
                }
            </form>
        </div>
    )
}

export default Form;