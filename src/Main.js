import React, { Component } from 'react';
import Item from './Item';
import './App.css';
import {addItem} from "./Actions";
import {store} from "./Store";
import {connect} from "react-redux";

class Main extends Component {
    render() {
        return (
            <main>
                {!this.props.item.length ? <button id='addItem' type='button' onClick={() => this.props.addItem()}>Add Item</button>
                    : null}
                {this.props.item.length !== 0
                    ? this.props.item.map((item, index) => <Item backgroundColor={item.backgroundColor} key={index} index={index} />) : null}
            </main>
        );
    }
}
const mapDispatchToProps = {
    addItem
};
const mapStateToProps = (state) => ({
    item: state.items
});

export default connect(mapStateToProps, mapDispatchToProps)(Main)

