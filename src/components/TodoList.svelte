<script>
  import { fade, scale } from "svelte/transition";
  import { Todos } from "../stores/todoStore";
  import TodoItem from "./TodoItem.svelte";
</script>

<div class="mt-6">
  {#each $Todos as todo (todo.id)}
    <div in:scale out:fade={{ duration: 500 }}>
      <TodoItem {todo} />
    </div>
  {/each}
</div>
