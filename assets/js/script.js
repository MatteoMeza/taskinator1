var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
    event.preventDefault();
    // adding .value gets the user input entered in the <input> tag and stores it in the taskNameInput variable
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    // same as above, but this gets the user selected option from the dropdown and stores it in the taskTypeInput variable
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
   
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);
    
    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);