<template>
  <div class="container py-6">
    <the-header mode="dark"></the-header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '../layouts/TheHeader.vue';

export default defineComponent({
  components: {
    TheHeader,
  },
  setup() {
    return {};
  },
});
</script>
