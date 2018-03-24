// Array to hold tasks
var tasks = [];

// Task status 'enum'
var taskStatus = {
  active: 'active',
  completed: 'completed'
}

// Task constructior function
function Task (id, name, status) {
  this.id = id;
  this.name = name;
  this.status = status;
}

// Creates a new task element and adds it to the DOM
function addTaskElement (task) {
  //creat elements
  var listEl = document.getElementById('active-list');
  var taskEl = document.createElement('li');
  var textEl = document.createTextNode(task.name);

// Set attributes
taskEl.setAttribute('id', task.id);

// Add text to task element
taskEl.appendChild(textEl);

// Add text to task element
listEl.appendChild(taskEl);
}

// Click handler to add a new task
function addTask (event) {
  // Get input
  var inputEl = document.getElementById('input-task');
  if (inputEl.value !== '') {
    // Create a unique id
    var id = 'task-' + task.length;

    // Create a new task
    var task = new Task(id, inputEl.vaue, taskStatus.active);
    task.push(task);

    // Add the task to the DOM
    addTaskElement(task);

    // Reset input
    inputEl.value = '';

  }
}

// Click handler to complete a task
function completeTask (event) {
  // Get the task element
  var taskEl = event.target;
  var id = taskEl.id;

  // Find corresponding task in array and update status
  for  (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      task[i].status = taskStatus.completed;
      break;
    }
  }
  //move task element from active list to completed list
  taskEl.remove();
  document.getElementById("completed-list").appendChild(taskEl);

}

function init () {
  // Wire up the add task button click handler
  document.getElementById('add-task').onclick = addTask;

  // wire up the Task completed list item click handler
  document.getElementById('active-list').onclick = completeTask;
}

init();
