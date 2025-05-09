import store from './store.js';
function render(){
    const todos = document.querySelector(".todos");
    const todoElements = store.todos.map((todo)=>{
        return `<li class="todo" data-id=${todo.id}>
            <span class="todo-title ${(todo.completed)?("completed"):("")}">${todo.title}</span>
            <div class="toggle-delete">
                <input type="checkbox" name="completed" class="todo-checkbox" ${(todo.completed)?("checked"):("")}>
                <button class="delete-todo-button">x</button>
            </div>
        </li>`
    });
    console.log(todoElements);
    let str="";
    for(let s of todoElements) str+=s;
    todos.innerHTML=str;
}
export default render;
