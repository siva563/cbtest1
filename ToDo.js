// Create main container for the form
var formContainer = document.createElement('div');
formContainer.setAttribute('style', 'border:2px solid #333;padding:20px;width:300px;margin:auto; box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1); border-radius: 8px;');

// Create the form
var form = document.createElement('form');
form.setAttribute('id', 'TaskForm');

// Label and input for the task
var taskLabel = document.createElement('label');
taskLabel.textContent = 'Enter a Task:';
taskLabel.setAttribute('style', 'display:block;margin-bottom:10px;');
var taskInput = document.createElement('input');
taskInput.setAttribute('type', 'text');
taskInput.setAttribute('name', 'task');
taskInput.setAttribute('style', 'width: 100%; padding: 8px; margin-bottom: 10px;'); 
taskLabel.appendChild(taskInput);
form.appendChild(taskLabel);

// Add buttons for Submit and Clear
var submitButton = document.createElement('button');
submitButton.textContent = 'Add Task';
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('style', 'margin-top:10px;');
form.appendChild(submitButton);

var clearButton = document.createElement('button');
clearButton.textContent = 'Clear All';
clearButton.setAttribute('type', 'button');
clearButton.setAttribute('style', 'margin-top:10px; margin-left:10px;');
form.appendChild(clearButton);

formContainer.appendChild(form);
document.body.appendChild(formContainer);

// Create the table for the task list
var table = document.createElement('table');
table.setAttribute('border', '1');
table.setAttribute('style', 'width: 100%; margin-top: 20px; display: none;');
var tableHeader = '<tr><th>No.</th><th>Task</th><th>Actions</th></tr>';
table.innerHTML = tableHeader;
document.body.appendChild(table);

// Initialize task counter
var taskCounter = 1;

// Event listener for adding a task
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    var task = taskInput.value.trim();
    if (!task) {
        alert("Please enter a task before submitting.");
        return;
    }

    // Display the table if a new task is added
    table.style.display = 'table';

    // Add a new row for the task with a task number
    var row = table.insertRow();
    row.insertCell(0).textContent = taskCounter++;  // Increment task counter
    row.insertCell(1).textContent = task;

    // Actions for edit and delete buttons
    var actionCell = row.insertCell(2);
    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.setAttribute('style', 'margin-right:10px');
    editButton.addEventListener('click', function() {
        taskInput.value = row.cells[1].textContent;
        table.deleteRow(row.rowIndex);
        taskCounter--; // Decrement counter if editing removes a row
    });
    actionCell.appendChild(editButton);

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        table.deleteRow(row.rowIndex);
        if (table.rows.length == 1) {
            table.style.display = 'none';
        }
        // Update numbering if any task is deleted
        updateTaskNumbers();
    });
    actionCell.appendChild(deleteButton);

    // Reset the input field
    form.reset();
});

// Event listener for clearing all tasks
clearButton.addEventListener('click', function() {
    form.reset();
    table.style.display = 'none';
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    taskCounter = 1; // Reset counter when all tasks are cleared
});

// Function to update task numbers after a task is deleted
function updateTaskNumbers() {
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[0].textContent = i;  // Update the numbering
    }
    taskCounter = table.rows.length; // Reset the counter based on the current row count
}
