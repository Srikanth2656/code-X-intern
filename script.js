document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const li = document.createElement('li');
        li.textContent = taskValue;

        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete';
        deleteBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            li.remove();
        });

        li.appendChild(deleteBtn);
        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
    }
});
