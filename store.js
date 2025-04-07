const store={
    todos : [
        {
            id : "1",
            title : "Complete task A",
            completed : false,
        } ,
        {
            id : "2",
            title : "Read Book",
            completed : true,
        } ,
        {
            id : "3",
            title : "Write code",
            completed : true,
        }
    ]
}
const storeHandler={
    get(target , property){
        console.log(typeof property);
        // string beacause object ke andar keys are by default in strings!
        console.log("oh you are trying to access property-> ", property);
        return target[property];
    },
    set(target , property , value){
        console.log("u are trying to set property ",property);
        target[property]=value;
        if(property=="todos"){
            window.dispatchEvent(new Event("todosChange"));
        }
        localStorage.setItem("store" , JSON.stringify(store));
        return true;
    }
}
function add_new_todo(todo){
    storeProxy.todos=[...storeProxy.todos , todo];
    // set function will get called
}
function delete_todo(id){
    storeProxy.todos = storeProxy.todos.filter((todo)=>{
        return (todo.id!=id);
    });
}
function complete_todo(id){
    storeProxy.todos = storeProxy.todos.map((todo)=>{
        if(todo.id!= id) return todo;
        else{
            const obj = {...todo , completed : !todo.completed};
            return obj;
            // best practice: avoid mutating objects directly inside .map() — use spread (...) to create a new object.
        }
    });
}
export {add_new_todo , delete_todo , complete_todo};
const storeProxy = new Proxy(store , storeHandler);
export default storeProxy;