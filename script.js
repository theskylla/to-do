// Array to hold tasks
let tasks = [];
let completedTasks = [];

//**måste fixa så allt använder sig av arrays med objects

// Add a new task
function addTask() {
  const input = document.querySelector("#input");
  const taskText = input.value.trim();

  // stop if empty
  if (!taskText) {
    const messageBox = document.querySelector("ul"); 
    const errorMessage = document.createElement("span"); 
    messageBox.appendChild(errorMessage); 
    errorMessage.style.color = "red"; 
    errorMessage.innerText = " *Please enter a task"; 
    //remove error messaage with click on input field inputText.onclick = function() { errorMessage.remove(); //say if task not added console.log("no task added");
    return;
  }

  // Capitalize first letter
  const task = taskText.charAt(0).toUpperCase() + taskText.slice(1).toLowerCase();
  // clear input
  input.value = ""; 
  // limited input to 30 characters in html #QA-skills


  // Create list item
  const li = document.createElement("li");

  // Checkbox with google material icons
  const checkbox = document.createElement("span");
  checkbox.className = "material-symbols-outlined checkbox";
  checkbox.textContent = "check_box_outline_blank";

  // Close button with html code for trash can
  const trash = document.createElement("span");
  trash.className = "close";
  trash.innerHTML = "&#x1F5D1";

  // Put everything together
  li.appendChild(checkbox);
  li.append(" " + task + "  ");
  li.appendChild(trash);

  document.querySelector("#taskList").appendChild(li);

  // Add to array + log added task, all tasks in list and completed tasks
  tasks.push(task);
  console.log("Added:", task);
  console.log("All tasks in list:", tasks);
  console.log("Completed tasks:", completedTasks);
}

function removeTask {
//Code for removing a task, not currently used
  console.log("Task removed:", task);
  console.log("All tasks in list:", tasks);
  console.log("Completed tasks:", completedTasks);
}

// Event delegation for checkboxes and close buttons
document.getElementById("taskList").addEventListener("click", function(e) {
  if (e.target.classList.contains("checkbox")) {
    toggleBox(e.target);
  }
  if (e.target.classList.contains("close")) {
    const li = e.target.parentElement;
    
    // adjust counter if deleting a completed task
    if (li.querySelector(".checkbox").textContent.trim() === "check_box") {
      const completedTasks = document.getElementById("completedTasks");
      let count = parseInt(completedTasks.textContent);
      completedTasks.textContent = (count - 1) + " completed";
    }
    li.remove();
  }
});

// Toggle checkbox
function toggleBox(el) {
  const completedTasks = document.getElementById("completedTasks");
  let count = parseInt(completedTasks.textContent);

  if (el.textContent.trim() === "check_box_outline_blank") {
    el.textContent = "check_box";
    el.parentElement.style.textDecoration = "line-through";
    completedTasks.textContent = (count + 1) + " completed";
    console.log("Task completed:", el.parentElement.textContent.trim());

  } else {

    el.textContent = "check_box_outline_blank";
    el.parentElement.style.textDecoration = "none";
    completedTasks.textContent = (count - 1) + " completed";
    console.log("Task uncompleted:", el.parentElement.textContent.trim());
  }
}
