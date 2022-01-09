import { addTodo, toggleTodo } from "./Action";
import { createStore } from "redux";
import { reducer, init } from "./Reducer";
// class Store{
//     constructor(reducer, initState){
//         this.reducer = reducer,
//         this.state = initState
//     }
//     getState(){
//         return this.state
//     }
//     dispatch(action){
//         this.state = this.reducer(this.state, action)
//     }
// }

var store = createStore(reducer, init);
console.log(store.getState());

store.dispatch(addTodo("buymilk1"));
store.dispatch(addTodo("buymilk2"));
store.dispatch(addTodo("getmilk3"));
store.dispatch(toggleTodo("getmilk3"));

console.log(store.getState());

export default store;
