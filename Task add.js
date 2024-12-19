function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let task = {
    text: taskText,
    completed: false,
  };
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderList();
  taskInput.value = "";
}

function renderList() {
  const taskList = document.getElementById("taskList");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  taskList.innerHTML = "";

  tasks.forEach((element, index) => {
    const li = document.createElement("li");
    li.classList.add("task");
    span = `onclick = toggleComplete(${index})`;
    li.innerHTML = `<span ${span} >${element.text}</span>`;
    if (element.completed) {
      li.classList.add("completed");
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.classList.add("delete");
    deleteButton.onclick = () => removeElement(index);

    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

function removeElement(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || {};
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderList();
}

window.onload = renderList;

function toggleComplete(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || {};
  console.log(tasks);
  tasks[index].completed = !tasks[index].completed;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderList();
}

//function removeTask(button) {
//  const taskItem = button.parentElement;
//  taskItem.remove();
//}

//Добавить иконку вместо подписи кнопки
/* .task-button {
    width: 50px;
    height: 50px;
    background-image: url('icon.png');  Путь к изображению 
    background-size: cover;
    border: none;
    cursor: pointer;
} */
