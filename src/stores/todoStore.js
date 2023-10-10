import { writable } from "svelte/store";

export const Todos = writable([]);

// Helper functions
export const addTodo = (todo) => {
  Todos.update((currentTodos) => {
    return [...currentTodos, { id: Date.now(), todo, completed: false }];
  });
};

export const deleteTodo = (id) => {
  Todos.update((currentTodos) => {
    return currentTodos.filter((todo) => todo.id !== id);
  });
};

export const toggleTodoCompleted = (id) => {
  Todos.update((todos) => {
    let index = -1;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
      todos[index].completed = !todos[index].completed;
    }
    return todos;
  });
};
