<template>
  <div class="flex flex-col items-center gap-2">
    <div v-html="item.img"></div>
    <p class="font-semibold font-mulish">{{ item.label }}</p>
    <p class="w-44 text-center font-light font-mulish">{{ item.desc }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup() {},
});
</script>
