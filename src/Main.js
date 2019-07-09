import React, {Component} from 'react'
import Item from './Item';
import './App.css';

 class Main extends Component{
     state ={
         items: []
     }
     addItem = () => {
         const newItem = {
             backgroundColor: this.getRandomColor()
         };
         this.setState({
             items: [
                 ...this.state.items,
                 newItem,
             ]
         })
         document.getElementById('addItem').style.visibility = 'hidden';
     };
     removeItem = (id) => {
         this.state.items.map((item, index) => {
             if (index === id) {
                 this.state.items.splice(index, 1)
                 this.setState({
                     items:[
                         ...this.state.items
                     ]
                 })
             }
         });
         this.state.items.length === 0 ? document.getElementById('addItem').style.visibility = 'visible'
             : document.getElementById('addItem').style.visibility = 'hidden';
     };

     getRandomColor = () => {
         const letters = '0123456789ABCDEF';
         return [0, 1, 2, 3, 4, 5].reduce(acc => acc + letters[Math.floor(Math.random() * 16)], '#');
     }

     render(){
         return(
         <main>

             <button id="addItem" type="button" onClick={() => this.addItem() }>Add Item</button>
             {this.state.items.length !== 0 ?
                 this.state.items.map((item, index) =>
                     <Item backgroundColor={item.backgroundColor} key={index} index={index} addItem={this.addItem} removeItem={this.removeItem}/>): null}
         </main>
     );
     }
}
export default Main