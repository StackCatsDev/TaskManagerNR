document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const clearTasksButton = document.getElementById('clearTasksButton');
    const isUrgentCheckbox = document.getElementById('isUrgent');
    const dueDateInput = document.getElementById('dueDate');
    const loadTasks = () => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        taskList.innerHTML = savedTasks.map((task, index) => {
            const isOverdue = task.dueDate && new Date(task.dueDate) < new Date();
            const dueDateText = task.dueDate ? ` (Due: ${task.dueDate})` : '';
            return `
                <li class="task-container ${task.urgent ? 'urgent' : ''} ${isOverdue ? 'overdue' : ''}" data-index="${index}">
                    <span class="task ${task.done ? 'done' : ''}">${task.text}${dueDateText}</span>
                    <div class="taskButtons">
                        <button id="doneB" onclick="done(${index})">&#x2714;</button>
                        <button id="remB" onclick="removeTask(${index})">Remove</button>
                    </div>
                </li>`;
        }).join('');

    const taskElements = document.querySelectorAll('.overdue');
    taskElements.forEach(taskEl => {
        taskEl.classList.add('wobble'); 
        setTimeout(() => {
            taskEl.classList.remove('wobble'); 
        }, 10000); 
    });
};
    const saveTask = () => {
        const task = taskInput.value.trim();
        const dueDate = dueDateInput.value;

        if (task) {
            const today = new Date();
            today.setHours(0, 0, 0, 0); 
            if (dueDate && new Date(dueDate) < today) {
                alert("The due date cannot be in the past.");
                return; 
            }

            const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
            const newTask = {
                text: task,
                done: false,
                urgent: isUrgentCheckbox.checked,
                dueDate: dueDate || null 
            };
            if (newTask.urgent) {
                savedTasks.unshift(newTask);
            } else {
                savedTasks.push(newTask);
            }

            localStorage.setItem('tasks', JSON.stringify(savedTasks));
            taskInput.value = '';
            isUrgentCheckbox.checked = false;
            dueDateInput.value = '';
            loadTasks();
        }
    };
    window.done = (index) => {
        setTimeout(() => {
            const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
            savedTasks[index].done = !savedTasks[index].done;
            localStorage.setItem('tasks', JSON.stringify(savedTasks));
            loadTasks();
        }, 500);
    };

    window.removeTask = (index) => {
        setTimeout(() => {
            const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
            savedTasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(savedTasks));
            loadTasks();
        }, 500);
    };
    clearTasksButton.addEventListener('click', () => {
        localStorage.removeItem('tasks');
        loadTasks();
    });
    dueDateInput.setAttribute('min', new Date().toISOString().split('T')[0]);
    addTaskButton.addEventListener('click', saveTask);
    loadTasks();
});
