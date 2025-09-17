const { useCallback } = require("react");

//array to hold tasks
var tasks = [];

    function addTask() { 
    const inputText = document.querySelector("input");

//capitalize first letter of task
    const task = inputText.value.charAt(0).toUpperCase() + inputText.value.slice(1).toLocaleLowerCase();
//clear input field
    const clearInput = document.querySelector("input").value = "";


//*lägg till kod som begränsar input till max __ tecken, QA-boyfriend tip*


//select ul and create li element
    const taskList = document.querySelector("ul");
    const listItem = document.createElement("li");
    const itemLabel = document.createElement("span");

//if input is filled add task to array, if not, display error messagex
    if (task) {    
       listItem.innerText = task;
       taskList.appendChild(listItem); 
       itemLabel.className = "material-symbols-outlined";
       itemLabel.innerText = "check_box_outline_blank";
       itemLabel.setAttribute("onclick", "toggleBox(this)");
       listItem.prepend(itemLabel); 
     
       
       console.log("added " + task);
       tasks.push(task);

//check tasks array       
       console.log(tasks);
       
      } else {

  alert("Please enter something ");
  console.log("no task added");     
}
}

//function to toggle between checked and unchecked box
function toggleBox(el) {
  if (el.textContent.trim() === "check_box_outline_blank") {
    el.textContent = "check_box";
    
    //add to completed tasks count
    const completedTasks = document.getElementById("completedTasks");
    let count = parseInt(completedTasks.textContent);
    count++;
    completedTasks.textContent = count + " completed";

    //line to cross out completed task
    el.parentElement.style.textDecoration = "line-through";
    console.log("task completed");
  
  } else if (el.textContent.trim() === "check_box") {
    el.textContent = "check_box_outline_blank";
    //remove from completed tasks count
    const completedTasks = document.getElementById("completedTasks");
    let count = parseInt(completedTasks.textContent);
    count--;
    completedTasks.textContent = count + " completed";
    //normal text for uncompleted task
    el.parentElement.style.textDecoration = "none";
    console.log("task uncompleted");
  }
}