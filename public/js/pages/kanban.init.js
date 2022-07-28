const cardhandler = dragula();
//This code should be written component Did mount
setTimeout(()=> {
    cardhandler.containers = [document.getElementById("todo-task"), document.getElementById("inprogress-task"), document.getElementById("complete-task")];
}, 2000)