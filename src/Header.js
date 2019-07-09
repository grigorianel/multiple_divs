import React from "react";
import './App.css';
function Header(){
    return(
            <header>
                <h1>Task: Multiple dives</h1>
                <details>
                    <summary>Implementation of adding and removing colored divs</summary>
                    <p>In this program user should be able to add or remove divs with different colors using
                        corresponding
                        buttons.</p>
                    <p>Add new divs using "Add Item" button</p>
                    <p>Remove div by clicking "Remove" button</p>
                </details>
            </header>
    );
}
export default Header