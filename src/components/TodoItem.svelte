<script>
  import { deleteTodo, toggleTodoCompleted } from "../stores/todoStore";
  export let todo;
</script>

<!-- <div class="bg-gray-200 rounded p-4 mb-2">
  {todo.todo}
</div> -->

<li
  class="bg-white flex items-center shadow-sm border border-gray-200 rounded-lg my-2 py-3 px-4"
>
  <input
    type="checkbox"
    name="completed"
    checked={todo.completed}
    on:change={() => toggleTodoCompleted(todo.id)}
    class="mr-2 form-checkbox h-5 w-5"
  />
  <span class={`flex-1 text-gray-800 ${todo.completed ? "line-through" : ""}`}>
    {todo.todo}
  </span>
  <button
    class="bg-red-500 test-sm hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
    on:click={() => deleteTodo(todo.id)}>Delete</button
  >
</li>
