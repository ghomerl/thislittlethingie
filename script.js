// JavaScript code to handle the task addition form submission
document.getElementById('addTaskForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    // Get input values
    var title = document.getElementById('taskTitle').value;
    var description = document.getElementById('taskDescription').value;
  
    // Create list item element
    var listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    
    // Create title element
    var titleElement = document.createElement('h4');
    titleElement.className = 'mb-1';
    titleElement.textContent = title;
  
    // Create description element
    var descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
  
    // Append title and description to list item
    listItem.appendChild(titleElement);
    listItem.appendChild(descriptionElement);
  
    // Append list item to task list
    document.getElementById('tasks').appendChild(listItem);
  
    // Clear form values
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDescription').value = '';
  
    // Close the modal
    $('#addTaskModal').modal('hide');
  });
  