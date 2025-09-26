// Array to hold tasks
let tasks = [];
let completedTasks = [];


//**kvar att fixa: tomma strings när man växlar i toggle

// Add a new task
function addTask() {
  const input = document.querySelector("#input");
  const taskText = input.value.trim();

  // Capitalize first letter
  let task = taskText.charAt(0).toUpperCase() + taskText.slice(1).toLowerCase();
  // clear input
  input.value = ""; 
  // limited input to 30 characters in html #QA-skills

  // stop if empty
  if (!taskText) {
    const messageBox = document.querySelector("ul"); 
    const errorMessage = document.createElement("span"); 
    messageBox.appendChild(errorMessage); 
    errorMessage.style.color = "red"; 
    errorMessage.innerText = " *Please enter a task"; 
    return;
  }

  // Create list item
  const li = document.createElement("li");

  // Checkbox with google material icons
  const checkbox = document.createElement("span");
  checkbox.className = "material-symbols-outlined checkbox";
  checkbox.textContent = "check_box_outline_blank";

  //task text
  const textLabel = document.createElement("span");
  textLabel.className = "text-label";
  textLabel.textContent = task;


  // Close button with html code for trash can
  const trash = document.createElement("span");
  trash.className = "close";
  trash.innerHTML = "&#x1F5D1";


  // Put everything together
  li.appendChild(checkbox);
  li.appendChild(textLabel);
  li.appendChild(trash);

  document.querySelector("#taskList").appendChild(li);

  // Add to array + log added task, all tasks in list and completed tasks
  tasks.push(task);

  console.log("Added:", task);
  console.log("Uncompleted tasks", tasks);
  console.log("Completed tasks:", completedTasks);
}

// Event delegation for checkboxes and close buttons
document.getElementById("taskList").addEventListener("click", function(e) {
  if (e.target.classList.contains("checkbox")) {
    toggleBox(e.target);
  }

  if (e.target.classList.contains("close")) {
    const li = e.target.parentElement;
    const task= li.textContent.replace("check_box", "").replace("check_box_outline_blank", "").replace("🗑", "").trim();
    removeTask(task);
    li.remove();
  }
  
});

// Toggle checkbox
function toggleBox(el) {

  if (el.textContent.trim() === "check_box_outline_blank") {
    const taskText = el.parentElement.textContent.replace("check_box", "").replace("check_box_outline_blank", "").replace("_outline_blank", "").replace("🗑", "").trim();
    el.textContent = "check_box";
    const textLabel = el.parentElement.querySelector(".text-label");
    textLabel.style.textDecoration = "line-through";

    tasks = tasks.filter(t => t !== taskText);
    completedTasks.push(taskText);

    let showCompletedTasks = document.getElementById("showCompletedTasks");
     showCompletedTasks.textContent = completedTasks.length + " completed";

    console.log("Marked as completed:", taskText);
    console.log("Uncompleted tasks:", tasks);
    console.log("Completed tasks:", taskText);


  } else {

    el.textContent = "check_box_outline_blank";
    const textLabel = el.parentElement.querySelector(".text-label");
    const taskText = input.value.trim();
    textLabel.style.textDecoration = "none";

    completedTasks = completedTasks.filter(t => t !== taskText);
    tasks.push(taskText);

    let showCompletedTasks = document.getElementById("showCompletedTasks");
    showCompletedTasks.textContent = completedTasks.length + " completed";

    let indexToAdd = completedTasks.indexOf(taskText);
    if (indexToAdd !== +1) {
      completedTasks.splice(indexToAdd, 1);
    }

    console.log("Marked as completed:", taskText);
    console.log("All tasks in list:", tasks);
    console.log("Marked as uncompleted", taskText);

  }
  
}

function removeTask(taskText) {
tasks = tasks.filter(t => t !== taskText);
completedTasks = completedTasks.filter(t => t !== taskText);

let showCompletedTasks = document.getElementById("showCompletedTasks");
showCompletedTasks.textContent = completedTasks.length + " completed";

//Code for removing a task, not currently used
  console.log("Task removed:", taskText);
  console.log("Uncompleted tasks:", tasks);
  console.log("Completed tasks:", completedTasks);
}