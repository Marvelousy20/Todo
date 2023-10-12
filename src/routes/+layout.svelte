<script>
  import { supabase } from "../supabase.js";
  import { userData } from "../stores/authStore.js";
  import Auth from "../components/Auth.svelte";
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";
  import { loadTodos } from "../stores/todoStore.js";

  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    userData.set(user);
  };
  //   what happens when a user logs in or out (detects changes)
  supabase.auth.onAuthStateChange((_, session) => {
    userData.set(session?.user);

    if (session?.user) {
      loadTodos();
      getUser();
    }
  });
</script>

<div class="mt-6 max-w-lg mx-auto px-4">
  {#if $userData}
    <Navbar />
    <slot />
  {:else}
    <Auth />
  {/if}
</div>
