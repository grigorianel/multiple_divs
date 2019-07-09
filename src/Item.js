import React from 'react'
import './App.css';

export const Item = (props) => {
    return <div id={`item_${props.index}`} style={{backgroundColor: props.backgroundColor}}>
            <span id="buttons">
            <button type="button" onClick={props.addItem}>Add Item</button>
            <button type="button" onClick={()=> props.removeItem(props.index)}>Remove</button>
            </span>
            </div>
}
export default Item;