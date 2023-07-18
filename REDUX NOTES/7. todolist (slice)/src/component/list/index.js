
import React from "react";
import { useSelector } from "react-redux";

function List(){
    const todos = useSelector( state => state.todo.items);

    console.log(todos);

    return(
        <div>
            list olacak
            <ul style={{listStyleType:"none"}} >
               {
                todos.map((todo, i) => (
                    <li key={i} > {todo} </li>
                ) )
               }
            </ul>
        </div>
    )
}

export default List;