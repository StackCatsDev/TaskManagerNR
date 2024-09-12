document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const clearTasksButton = document.getElementById('clearTasksButton');

    const loadTasks = () => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        taskList.innerHTML = savedTasks.map((task, index) =>
            `<li>
                <span>${task}</span>
                <button onclick="removeTask(${index})">Remove</button>
            </li>`
        ).join('');
    };
    const saveTask = () => {
        const task = taskInput.value.trim();
        if (task) {
            const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
            savedTasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(savedTasks));
            taskInput.value = '';
            loadTasks();
        }
    };

    window.removeTask = (index) => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        savedTasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(savedTasks));
        loadTasks();
    };

    clearTasksButton.addEventListener('click', () => {
        localStorage.removeItem('tasks');
        loadTasks();
    });

    addTaskButton.addEventListener('click', saveTask);

    loadTasks();
});