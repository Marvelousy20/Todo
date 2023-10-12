import { writable } from "svelte/store";
import { supabase } from "../supabase";

export const todos = writable([]);

// load todos from supabase
export const loadTodos = async () => {
  const { data, error } = await supabase.from("todo").select();

  if (error) {
    return console.error(error);
  }

  todos.set(data);
};

// Helper functions
export const addTodo = async (todo, user_id) => {
  // handles backend
  const { error } = await supabase.from("todo").insert({ todo, user_id });

  if (error) {
    return console.error(error);
  }
  loadTodos();
};

export const deleteTodo = async (id) => {
  // handles deletion on the backend
  const { error } = await supabase.from("todo").delete().eq("id", id);

  if (error) console.error(error);

  // handles deletion on the frontend
  todos.update((currentTodos) => {
    return currentTodos.filter((todo) => todo.id !== id);
  });
};

export const toggleTodoCompleted = async (id, currentState) => {
  const { error } = await supabase
    .from("todo")
    .update({ completed: !currentState })
    .eq("id", id);

  if (error) console.error(error);

  todos.update((todos) => {
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
