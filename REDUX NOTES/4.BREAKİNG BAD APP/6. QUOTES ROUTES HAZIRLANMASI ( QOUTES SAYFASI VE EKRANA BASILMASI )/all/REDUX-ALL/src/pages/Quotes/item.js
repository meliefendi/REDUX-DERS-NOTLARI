
import React from "react";
import "./styles.css"

function Item({ item }) {
    return (
        <div className="quotes_item" >
           <q> {item.quote} </q> <strong> {item.author} </strong>
        </div>
    )
}

export default Item;