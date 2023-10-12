<script>
  import { addTodo } from "../stores/todoStore";
  import { userData } from "../stores/authStore";

  let todo = "";
  let validateError = "";
  let min = 10;

  let isDisabled = true;

  const handleInput = () => {
    if (todo.trim().length < min) {
      isDisabled = true;
      validateError = "Text must have a min of 10 characters";
    } else {
      validateError = "";
      isDisabled = false;
    }
  };

  const handleSubmit = () => {
    if (todo.trim().length > min) {
      addTodo(todo, $userData.id);
      todo = "";
    }
  };
</script>

<form action="" on:submit|preventDefault={handleSubmit}>
  <div class="flex flex-col text-sm mb-2">
    <label class="font-bold mb-2 text-gray-800" for="todo">Todo</label>
    <input
      type="text"
      name="todo"
      on:input={handleInput}
      bind:value={todo}
      placeholder="what do you want to do today?"
      class="appearance-none shadow-sm border-gray-200 p-3 focus:outline-none focus:border-gray-500 rounded-lg"
    />

    {#if validateError}
      <div class="text-red-500 text-center text-sm">
        {validateError}
      </div>
    {/if}
  </div>

  <button
    type="submit"
    class={`w-full rounded p-2 text-lg font-bold text-white ${
      isDisabled ? "bg-gray-100" : "bg-blue-500 hover:bg-blue-600"
    }`}
    disabled={isDisabled}
  >
    Submit
  </button>
</form>
