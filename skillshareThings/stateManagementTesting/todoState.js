export const initialTodoState = {
  todos: [],
  filter: "all",
};

const filters = new Set(["all", "active", "completed"]);

export function todoReducer(state = initialTodoState, action) {
  switch (action.type) {
    case "todos/add": {
      const text = action.payload.text.trim();
      if (!text) return state;

      return {
        ...state,
        todos: [
          ...state.todos,
          { id: action.payload.id, text, completed: false },
        ],
      };
    }
    case "todos/toggle":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      };
    case "todos/remove":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case "todos/set-filter":
      return filters.has(action.payload.filter)
        ? { ...state, filter: action.payload.filter }
        : state;
    case "todos/clear-completed":
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };
    default:
      return state;
  }
}

export function createStore(reducer, initialState) {
  let state = initialState;
  const listeners = new Set();

  return {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);
      listeners.forEach((listener) => listener(state, action));
      return action;
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

export function addTodo(text) {
  return {
    type: "todos/add",
    payload: {
      id: `todo-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      text,
    },
  };
}

export function toggleTodo(id) {
  return { type: "todos/toggle", payload: { id } };
}

export function removeTodo(id) {
  return { type: "todos/remove", payload: { id } };
}

export function setFilter(filter) {
  return { type: "todos/set-filter", payload: { filter } };
}

export function clearCompleted() {
  return { type: "todos/clear-completed" };
}
