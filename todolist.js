document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const clearTasksButton = document.getElementById('clearTasksButton');
    const isUrgentCheckbox = document.getElementById('isUrgent');

    const loadTasks = () => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        taskList.innerHTML = savedTasks.map((task, index) =>
            `<li class="task-container ${task.urgent ? 'urgent' : ''}" data-index="${index}">
                <span class="task ${task.done ? 'done' : ''}">${task.text}</span>
                <div class="taskButtons">
                <button id="doneB" onclick="done(${index})">	&#x2714;</button>
                <button id="remB" onclick="removeTask(${index})">Remove</button>
                </div>
            </li>`
        ).join('');
    };

    const saveTask = () => {
        const task = taskInput.value.trim();
        if (task) {
            const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
            const newTask = { text: task, done: false, urgent: isUrgentCheckbox.checked };
            
            if (newTask.urgent) {
                savedTasks.unshift(newTask);
            } else {
                savedTasks.push(newTask);
            }

            localStorage.setItem('tasks', JSON.stringify(savedTasks));
            taskInput.value = '';
            isUrgentCheckbox.checked = false;
            loadTasks();
        }
    };

    window.removeTask = (index) => {
        setTimeout(() => {
            const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
            savedTasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(savedTasks));
            loadTasks();
        }, 500);
    };

    window.done = (index) => {
        setTimeout(() => {
            const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
            savedTasks[index].done = !savedTasks[index].done;
            localStorage.setItem('tasks', JSON.stringify(savedTasks));
            loadTasks();
        }, 500);
    };

    clearTasksButton.addEventListener('click', () => {
        localStorage.removeItem('tasks');
        loadTasks();
    });

    addTaskButton.addEventListener('click', saveTask);

    loadTasks();
});
