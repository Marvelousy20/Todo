<script>
  import { fade, scale } from "svelte/transition";
  import { todos } from "../stores/todoStore";
  import TodoItem from "./TodoItem.svelte";
</script>

<div class="mt-6">
  {#each $todos as todo (todo.id)}
    <div in:scale out:fade={{ duration: 500 }}>
      <TodoItem {todo} />
    </div>
  {/each}
</div>
