var inputTask = document.getElementById("input-task")
var btnAddTask = document.getElementById("btn-add-task")
var taskList = document.getElementById("item-list")
var idTask = 0



btnAddTask.addEventListener('click', () => {
    if (inputTask.value != "") {
        idTask++;
        var li = document.createElement("li");
        li.id = idTask;
        li.innerHTML = `${inputTask.value} <button class="btn-remove" onclick="removeTask(event)" name=${idTask}>Remove</button> <hr class="hr-style"></hr>`;
        taskList.appendChild(li);
        inputTask.value = ""


    }
    else {
        alert("Coloque sua tarefa")

    }




});

inputTask.addEventListener('keypress', (event) => {
    if (event.key != "Enter" ) {
        return ""
    }
    else{ if (inputTask.value != "") {
        idTask++;
        var li = document.createElement("li");
        li.id = idTask;
        li.innerHTML = `${inputTask.value} <button class="btn-remove" onclick="removeTask(event)" name=${idTask}>Remove</button> <hr class="hr-style"></hr>`;
        taskList.appendChild(li);
        inputTask.value = ""
        
    }
    else {
        alert("Coloque sua Tarefa")
    }
}
    
    
       
});
function removeTask(event){
    var elementToRemove = document.getElementById(event.target.name);
    elementToRemove.remove();
    
}