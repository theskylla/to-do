
//array to hold tasks
var tasks = [];

    function addTask() {
    const inputText = document.querySelector("input");

//capitalize first letter of task, clear input
    const task = inputText.value.charAt(0).toUpperCase() + inputText.value.slice(1).toLocaleLowerCase();
    const clearInput = document.querySelector("input").value = "";

//**lägg till kod som begränsar input till max __ tecken, QA-boyfriend tip, +felmeddelande det är för långt?

// Create a "close" button and add it to each list item
var myTaskList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myTaskList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("              \u00D7");
  span.className = "close";
  span.appendChild(txt);
  myTaskList[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//function to toggle between checked and unchecked box

//**fixa så både checkbox och kryss använder samma metod */


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

//select ul and create li element
    const taskList = document.querySelector("ul");
    const listItem = document.createElement("li");
    const itemLabel = document.createElement("span");

//if input is filled add task to array, if not, display error messagex
    if (task) {    
       taskList.appendChild(listItem); 
       listItem.innerText = task;
       itemLabel.className = "material-symbols-outlined";
       itemLabel.innerText = "check_box_outline_blank";
       itemLabel.setAttribute("onclick", "toggleBox(this)");
       listItem.prepend(itemLabel); 
     
       
       console.log("added " + task);
       tasks.push(task);

//check tasks array       
       console.log(tasks);
       

    } else {

  //display error message if input is empty
  const messageBox = document.querySelector("ul");
  const errorMessage = document.createElement("span");
  messageBox.appendChild(errorMessage);
  errorMessage.style.color = "red";
    errorMessage.innerText = " *Please enter a task";

  //remove error messaage with click on input field
  inputText.onclick = function() {
  errorMessage.remove();
    
 //say if task not added
  console.log("no task added");     
}
}
    }

