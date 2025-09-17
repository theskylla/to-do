
//array to hold tasks
var tasks = [];

    function addTask() { 
    const inputText = document.querySelector("input");
    const task = inputText.value.trim();
    const clearInput = document.querySelector("input").value = "";

//if input is filled add task to array, if not, display error messagex
    if (task) {    
   
       console.log("added " + task);
       tasks.push(task);

//check tasks array       
       console.log(tasks);
       
   
      } else {

  alert("Please enter something ");
  console.log("no task added");  
   
}
}
