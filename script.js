const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const completedList = document.getElementById('completedList');

function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = () => completeTask(li);

    li.appendChild(completeButton);
    taskList.appendChild(li);

    taskInput.value = '';
}

function completeTask(taskItem) {
    taskList.removeChild(taskItem);
    const completedTask = document.createElement('li');
    completedTask.textContent = taskItem.textContent + ' - Completed on ' + getCurrentDateTime();
    completedList.appendChild(completedTask);
}

function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} at ${time}`;
}