const filterLabels = {
  all: "All",
  active: "Active",
  completed: "Completed",
};

export function render(root, state) {
  root.innerHTML = `
    <main class="todo-app">
      <header class="app-header">
        <p class="eyebrow">A small state management demo</p>
        <h1>My todos</h1>
        <p class="intro">Add a task, change its state, and watch the UI follow along.</p>
      </header>

      <form id="todo-form" class="todo-form">
        <label class="visually-hidden" for="todo-input">New todo</label>
        <input id="todo-input" name="todo" type="text" maxlength="120" placeholder="What needs doing?" autocomplete="off" required>
        <button class="add-button" type="submit">Add task</button>
      </form>

      <section class="list-section" aria-label="Todo list">
        <div class="list-toolbar">
          <p id="todo-count" class="todo-count" aria-live="polite"></p>
          <div class="filters" role="group" aria-label="Filter todos">
            ${Object.entries(filterLabels)
              .map(
                ([filter, label]) => `
                  <button class="filter-button" type="button" data-filter="${filter}" aria-pressed="${state.filter === filter}">${label}</button>
                `,
              )
              .join("")}
          </div>
        </div>

        <ul id="todo-list" class="todo-list"></ul>
        <p id="empty-state" class="empty-state" role="status"></p>

        <footer class="list-footer">
          <span id="completed-count" class="completed-count"></span>
          <button id="clear-completed" class="text-button" type="button">Clear completed</button>
        </footer>
      </section>

      <details class="learning-note">
        <summary>How the state flow works</summary>
        <ol>
          <li>A UI event creates an action, such as <code>todos/add</code>.</li>
          <li><code>dispatch</code> sends that action to the reducer.</li>
          <li>The reducer returns a new state without changing the old one.</li>
          <li>The store notifies its subscribers, and the UI renders from that state.</li>
        </ol>
        <p>Open the browser console to see each dispatched action and updated state.</p>
      </details>
    </main>
  `;

  const visibleTodos = state.todos.filter((todo) => {
    if (state.filter === "active") return !todo.completed;
    if (state.filter === "completed") return todo.completed;
    return true;
  });
  const activeCount = state.todos.filter((todo) => !todo.completed).length;
  const completedCount = state.todos.length - activeCount;
  const todoList = root.querySelector("#todo-list");

  visibleTodos.forEach((todo) => {
    const item = document.createElement("li");
    item.className = `todo-item${todo.completed ? " is-completed" : ""}`;

    const label = document.createElement("label");
    label.className = "todo-label";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.dataset.todoToggle = todo.id;
    checkbox.setAttribute(
      "aria-label",
      `${todo.completed ? "Mark" : "Complete"} ${todo.text}`,
    );

    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todo.text;

    const removeButton = document.createElement("button");
    removeButton.className = "remove-button";
    removeButton.type = "button";
    removeButton.dataset.removeTodo = todo.id;
    removeButton.setAttribute("aria-label", `Remove ${todo.text}`);
    removeButton.textContent = "×";

    label.append(checkbox, text);
    item.append(label, removeButton);
    todoList.append(item);
  });

  root.querySelector("#todo-count").textContent =
    `${activeCount} ${activeCount === 1 ? "task" : "tasks"} left`;
  root.querySelector("#completed-count").textContent =
    completedCount > 0 ? `${completedCount} completed` : "";

  const emptyState = root.querySelector("#empty-state");
  emptyState.hidden = visibleTodos.length > 0;
  emptyState.textContent =
    state.todos.length === 0
      ? "Your list is clear. Add your first task above."
      : `No ${state.filter} tasks to show.`;

  root.querySelector("#clear-completed").disabled = completedCount === 0;
}
