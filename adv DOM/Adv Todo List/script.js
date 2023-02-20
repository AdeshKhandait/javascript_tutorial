const form = document.querySelector("#new-todo-form");
const inpt = document.querySelector("#todo-input");
const template_todo = document.querySelector("#list-item-template");
const list = document.querySelector("#list");
const delet_btn = document.querySelector("[data-button-delete]");
// console.log(template_todo);

// Local Storage Setup
const LOCAL_STORAGE_PREFIX = "AdvanceTodoList";
const TODO_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}`;

// Loading old Stored Todo
let todos = loadTodo();
console.log(loadTodo());
todos.forEach(renderTodo);

// CheckBox
list.addEventListener("change", (e) => {
  if (!e.target.matches("[data-list-item-checkbox]")) return;

  // Get the todo that we clicked on
  const parent = e.target.closest(".list-item");
  const todoId = parent.dataset.todoId;
  const todo = todos.find((t) => t.id === todoId);
  todo.complete = e.target.checked;
  saveTodo();
});

// Adding New Todo
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoName = inpt.value;
  if (todoName === "") return;
  const newTodo = {
    name: todoName,
    complete: false,
    id: new Date().valueOf().toString(),
  };
  todos.push(newTodo);
  renderTodo(newTodo);
  saveTodo(newTodo);
  inpt.value = "";
});

// Delete
list.addEventListener("click", (e) => {
  if (e.target.matches("[data-button-delete]")) {
    const parent = e.target.closest(".list-item");
    const todoId = parent.dataset.todoId;
    parent.remove();
    todos = todos.filter((t) => t.id !== todoId);
    saveTodo();
  }
});

// Render Todo
function renderTodo(todo) {
  const templateTodo = template_todo.content.cloneNode(true);
  const todoTextElement = templateTodo.querySelector("[data-list-item-text]");
  const listItem = templateTodo.querySelector(".list-item");
  listItem.dataset.todoId = todo.id;
  todoTextElement.innerText = todo.name;
  const checkbox = templateTodo.querySelector("[data-list-item-checkbox]");
  checkbox.checked = todo.complete;
  list.appendChild(templateTodo);
}

// Save todo
function saveTodo() {
  localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
}

// Load todo from local to current
function loadTodo() {
  const data = localStorage.getItem(TODO_STORAGE_KEY);
  return JSON.parse(data) || [];
}
