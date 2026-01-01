
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const resetBtn = document.getElementById("resetBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
resetBtn.addEventListener("click", resetTasks);

taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  taskList.appendChild(li);
  taskInput.value = "";
}

function resetTasks() {
  taskList.innerHTML = "";
  taskInput.value = "";
}
