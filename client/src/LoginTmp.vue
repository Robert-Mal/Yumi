<template>
  <div class="flex flex-col gap-8">
    <form class="flex gap-4">
      <input
        type="text"
        placeholder="email"
        class="border-2 rounded border-gray-300 px-2 py-1"
      />
      <input
        type="text"
        placeholder="password"
        class="border-2 rounded border-gray-300 px-2 py-1"
      />
      <input
        type="text"
        placeholder="confirm password"
        class="border-2 rounded border-gray-300 px-2 py-1"
      />
      <button
        class="border-2 rounded border-pink-600 px-2 py-1"
        @click.prevent="signIn"
      >
        create account
      </button>
    </form>
    <form class="flex gap-4">
      <input
        type="text"
        placeholder="email"
        class="border-2 rounded border-gray-300 px-2 py-1"
      />
      <input
        type="text"
        placeholder="password"
        class="border-2 rounded border-gray-300 px-2 py-1"
      />
      <button
        class="border-2 rounded border-pink-600 px-2 py-1"
        @click.prevent="login"
      >
        login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  setup() {
    const signIn = () => {
      // ....
    };

    const login = () => {
      // ....
    };
    return { signIn, login };
  },
};
</script>
