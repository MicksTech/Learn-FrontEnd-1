function addTodo() {
    const input = document.getElementById('todoInput');
    const task = input.value.trim();

    if (task === "") {
        alert("Please enter the task");
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = `${task} <button onclick="removeTodo(this)">Delete</button>`;
    document.getElementById('todoList').appendChild(li);

    input.value = '';
}
function removeTodo(button) {
    button.parentElement.remove();
}
