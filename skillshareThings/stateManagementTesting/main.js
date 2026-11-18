import {
  addTodo,
  clearCompleted,
  createStore,
  initialTodoState,
  removeTodo,
  setFilter,
  todoReducer,
  toggleTodo,
} from "./todoState.js";
import { render } from "./render.js";

const root = document.querySelector("#root");
const store = createStore(todoReducer, initialTodoState);

function dispatch(action) {
  console.log("[todo store] action", action);
  store.dispatch(action);
  console.log("[todo store] state", store.getState());
}

store.subscribe((state) => render(root, state));
render(root, store.getState());

root.addEventListener("submit", (event) => {
  if (event.target.id !== "todo-form") return;

  event.preventDefault();
  const input = root.querySelector("#todo-input");
  const text = input.value.trim();
  if (!text) return;

  dispatch(addTodo(text));
  root.querySelector("#todo-input").focus();
});

root.addEventListener("change", (event) => {
  const checkbox = event.target;
  if (!(checkbox instanceof HTMLInputElement)) return;

  const todoId = checkbox.dataset.todoToggle;
  if (todoId) dispatch(toggleTodo(todoId));
});

root.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  if (button.dataset.filter) {
    dispatch(setFilter(button.dataset.filter));
  } else if (button.dataset.removeTodo) {
    dispatch(removeTodo(button.dataset.removeTodo));
  } else if (button.id === "clear-completed") {
    dispatch(clearCompleted());
  }
});
