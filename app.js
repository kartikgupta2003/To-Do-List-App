import render from './render.js';
import store from './store.js';
import { add_new_todo } from './store.js';
import { delete_todo } from './store.js';
import { complete_todo } from './store.js';
// store.todos=[];
window.addEventListener("todosChange" , ()=>{
    render();
})

const storeFromLocalStorage = JSON.parse(localStorage.getItem("store"));
if(storeFromLocalStorage?.todos.length > 0){
    store.todos = storeFromLocalStorage.todos;
}
else{
    localStorage.setItem("store" , JSON.stringify(store));
    render();
}

const form = document.querySelector("#form");
const input = document.querySelector(".todo-title-input");
const list = document.querySelector(".todos");
// console.dir(list);
form.addEventListener("submit" , (e)=>{
    e.preventDefault();
    const todo_title = input.value;
    const new_todo = {id : crypto.randomUUID() , title : todo_title , completed: false};
    add_new_todo(new_todo);
});
list.addEventListener("click" , (e)=>{
    console.dir(e.target);
    if(e.target.classList.contains("delete-todo-button")){
        const id = e.target.parentNode.parentNode.dataset.id;
        // console.log(id);
        delete_todo(id);
    }
    if(e.target.classList.contains("todo-checkbox")){
        const id = e.target.parentNode.parentNode.dataset.id;
        complete_todo(id);
    }
})
