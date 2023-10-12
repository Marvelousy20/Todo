<script>
  import { supabase } from "../supabase";
  let loading = false;
  let email;

  const handleLogin = () => {
    try {
      const { data, error } = supabase.auth.signInWithOtp({ email });
      loading = true;

      if (error) {
        return console.error(error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      loading = false;
    }
  };
</script>

<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">Log In</h1>
<p class="text-center mt-2">Sign in via magic link with your email below.</p>

<form on:submit|preventDefault={handleLogin}>
  <div class="flex flex-col text-sm mb-2">
    <label for="email" class="font-bold mb-2 text-gray-800">Email</label>
    <input
      type="email"
      name="email"
      class="appearance-none shadow-sm border border-gray-200 focus:outline-none p-2 focus:border-gray-500 rounded-lg mb-2"
      id=""
      placeholder="Enter a email address"
      bind:value={email}
      required
    />
    <button
      type="submit"
      class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 p-2 text-white"
      >Login</button
    >
  </div>
</form>
