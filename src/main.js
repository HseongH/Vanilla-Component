import TaskForm from "./components/taskform.js";
import TodoList from "./components/todolist.js";

const root = document.getElementById("root");

const todolist = new TodoList();
const taskForm = new TaskForm((text) => todolist.addTodo(text));

root.appendChild(taskForm);
root.appendChild(todolist);
