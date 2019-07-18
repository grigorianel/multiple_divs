import React from 'react';
import './App.css';
import { addItem, removeItem } from "./Actions";
import {connect} from "react-redux";

const Item = props =>
    <div id={`item_${props.index}`} style={{ backgroundColor: props.backgroundColor }}>
  <span id='buttons'>
    <button type='button' onClick={props.addItem}>Add Item</button>
    <button type='button' onClick={props.removeItem(`${props.index}`)}>Remove</button>
  </span>
</div>;

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: () => dispatch(addItem()),
    removeItem: (index) => () => dispatch(removeItem(index)),
  };
};
const mapStateToProps = (state) => ({
  item: state.items
});

export default connect(mapStateToProps, mapDispatchToProps)(Item)