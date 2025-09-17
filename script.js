
//array to hold tasks
var tasks = [];

    function addTask() { 
    const inputText = document.querySelector("input");

//capitalize first letter of task
    const task = inputText.value.charAt(0).toUpperCase() + inputText.value.slice(1).toLocaleLowerCase();
//clear input field
    const clearInput = document.querySelector("input").value = "";

//select ul and create li element
    const taskList = document.querySelector("ul");
    const listItem = document.createElement("li");
    const itemLabel = document.createElement("span");

//if input is filled add task to array, if not, display error messagex
    if (task) {    
       listItem.innerText = task;
       taskList.appendChild(listItem);
       
       console.log("added " + task);
       tasks.push(task);

//check tasks array       
       console.log(tasks);
       
   
      } else {

  alert("Please enter something ");
  console.log("no task added");  
   
}
}
